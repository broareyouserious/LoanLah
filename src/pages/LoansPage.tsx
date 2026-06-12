import { useEffect, useRef } from 'react';
import { User, Briefcase, Building2, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const loanProducts = [
  {
    id: 'personal',
    title: 'Personal Loan',
    description: 'Flexible financing for your personal needs. Whether it\'s a vacation, wedding, or unexpected expenses, we\'ve got you covered.',
    icon: User,
    amountRange: 'RM 1,000 - RM 50,000',
    interestRate: '1.2% - 1.8% per month',
    repaymentPeriod: '3 - 24 months',
    eligibility: [
      'Malaysian citizen or PR',
      'Aged 21-60 years',
      'Minimum monthly income RM 2,000',
      'Employed or self-employed',
    ],
    color: 'bg-[#EAF3FF]',
    iconColor: 'text-[#2F84FF]',
  },
  {
    id: 'salary',
    title: 'Salary Loan',
    description: 'Quick cash advance against your salary. Get funds before payday with minimal documentation and fast approval.',
    icon: Briefcase,
    amountRange: 'RM 1,000 - RM 30,000',
    interestRate: '1.0% - 1.5% per month',
    repaymentPeriod: '3 - 12 months',
    eligibility: [
      'Malaysian citizen',
      'Aged 21-55 years',
      'Minimum monthly income RM 2,500',
      'Permanent employee (6+ months)',
    ],
    color: 'bg-[#E8FAF6]',
    iconColor: 'text-[#10B981]',
  },
  {
    id: 'business',
    title: 'Business Loan',
    description: 'Fuel your business growth with working capital. Perfect for SMEs looking to expand operations or manage cash flow.',
    icon: Building2,
    amountRange: 'RM 10,000 - RM 100,000',
    interestRate: '1.0% - 1.5% per month',
    repaymentPeriod: '6 - 36 months',
    eligibility: [
      'Registered Malaysian business',
      'Operating for 1+ years',
      'Minimum monthly revenue RM 10,000',
      'Valid business registration',
    ],
    color: 'bg-[#FFF2EC]',
    iconColor: 'text-[#F97316]',
  },
];

export default function LoansPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
          },
        }
      );

      const cards = cardsRef.current?.querySelectorAll('.loan-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              end: 'top 50%',
              scrub: true,
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full pt-[72px] bg-[#F6F8FE]">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="loanlah-section">
          <div className="loanlah-container">
            <div ref={heroRef} className="text-center max-w-3xl mx-auto">
              <h1 className="loanlah-heading-1 text-[#101727] mb-6">
                Loan Products
              </h1>
              <p className="loanlah-body text-lg">
                Choose the loan that fits your needs. All our products come with transparent terms, 
                no hidden fees, and flexible repayment options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Products */}
      <section className="py-16 lg:py-20">
        <div className="loanlah-section">
          <div className="loanlah-container">
            <div ref={cardsRef} className="space-y-8">
              {loanProducts.map((loan) => (
                <div
                  key={loan.id}
                  className="loan-card loanlah-card p-6 lg:p-8 hover:-translate-y-1 transition-transform duration-200"
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left - Main Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 ${loan.color} rounded-xl flex items-center justify-center`}>
                          <loan.icon className={`w-6 h-6 ${loan.iconColor}`} />
                        </div>
                        <h2 className="loanlah-heading-3 text-[#101727]">{loan.title}</h2>
                      </div>
                      
                      <p className="text-[#6B7280] leading-relaxed mb-6">
                        {loan.description}
                      </p>

                      {/* Key Details */}
                      <div className="grid sm:grid-cols-3 gap-4 mb-6">
                        <div className="bg-[#F6F8FE] rounded-xl p-4">
                          <p className="text-xs text-[#6B7280] uppercase tracking-wider mb-1">Loan Amount</p>
                          <p className="font-semibold text-[#101727]">{loan.amountRange}</p>
                        </div>
                        <div className="bg-[#F6F8FE] rounded-xl p-4">
                          <p className="text-xs text-[#6B7280] uppercase tracking-wider mb-1">Interest Rate</p>
                          <p className="font-semibold text-[#101727]">{loan.interestRate}</p>
                        </div>
                        <div className="bg-[#F6F8FE] rounded-xl p-4">
                          <p className="text-xs text-[#6B7280] uppercase tracking-wider mb-1">Repayment</p>
                          <p className="font-semibold text-[#101727]">{loan.repaymentPeriod}</p>
                        </div>
                      </div>

                      <Link
                        to="/contact"
                        className="loanlah-btn-primary inline-flex items-center gap-2"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                    {/* Right - Eligibility */}
                    <div className="bg-[#F6F8FE] rounded-2xl p-6">
                      <h3 className="font-semibold text-[#101727] mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        Eligibility
                      </h3>
                      <ul className="space-y-3">
                        {loan.eligibility.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-[#6B7280]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20">
        <div className="loanlah-section">
          <div className="loanlah-container">
            <div className="loanlah-card p-8 lg:p-12 text-center">
              <h2 className="loanlah-heading-3 text-[#101727] mb-4">
                Not sure which loan is right for you?
              </h2>
              <p className="text-[#6B7280] mb-6 max-w-xl mx-auto">
                Our team can help you choose the best option based on your needs and financial situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="loanlah-btn-primary inline-flex items-center justify-center gap-2">
                  Talk to Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/calculator" className="loanlah-btn-secondary inline-flex items-center justify-center gap-2">
                  Try Calculator
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
