import { useEffect, useRef } from 'react';
import { FileText, Search, FileSignature, Wallet, CheckCircle, ArrowRight, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Apply Online',
    description: 'Fill out our simple online application form. It takes just a few minutes and requires basic information about yourself and your income.',
    icon: FileText,
    details: [
      'Provide your personal details',
      'Upload required documents (IC, payslips)',
      'Select your preferred loan amount and duration',
      'Submit your application',
    ],
    color: 'bg-[#E8FAF6]',
    time: '5-10 minutes',
  },
  {
    number: '02',
    title: 'Our Team Reviews',
    description: 'Our credit team will review your application and documents. We use a combination of technology and human expertise to make fair decisions.',
    icon: Search,
    details: [
      'Automated credit assessment',
      'Document verification',
      'Income verification',
      'Final approval decision',
    ],
    color: 'bg-[#F1F0FA]',
    time: '1-2 business days',
  },
  {
    number: '03',
    title: 'Sign Agreement',
    description: 'Once approved, review and sign your loan agreement digitally. All terms are clearly displayed before you commit.',
    icon: FileSignature,
    details: [
      'Review loan terms and conditions',
      'Understand repayment schedule',
      'Sign digitally via e-signature',
      'Receive confirmation',
    ],
    color: 'bg-[#FFF2EC]',
    time: '10-15 minutes',
  },
  {
    number: '04',
    title: 'Receive Funds',
    description: 'After signing, the funds will be transferred directly to your bank account. Start using your loan for your needs right away.',
    icon: Wallet,
    details: [
      'Funds transferred to your account',
      'Receive SMS and email confirmation',
      'Start using your loan',
      'Set up repayment reminders',
    ],
    color: 'bg-[#EAF3FF]',
    time: 'Same day',
  },
];

const requirements = [
  {
    title: 'Identification',
    items: ['Malaysian IC (front and back)', 'Passport-sized photo'],
    icon: Shield,
  },
  {
    title: 'Income Proof',
    items: ['Latest 3 months payslips', 'Latest 3 months bank statements'],
    icon: Wallet,
  },
  {
    title: 'Address Proof',
    items: ['Utility bill (within 3 months)', 'Or bank statement with address'],
    icon: FileText,
  },
];

export default function HowItWorksPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const requirementsRef = useRef<HTMLDivElement>(null);

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

      const stepCards = stepsRef.current?.querySelectorAll('.step-card');
      if (stepCards) {
        gsap.fromTo(
          stepCards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: stepsRef.current,
              start: 'top 75%',
              end: 'top 50%',
              scrub: true,
            },
          }
        );
      }

      const reqCards = requirementsRef.current?.querySelectorAll('.req-card');
      if (reqCards) {
        gsap.fromTo(
          reqCards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: requirementsRef.current,
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
                How It Works
              </h1>
              <p className="loanlah-body text-lg">
                Getting a loan with LoanLah is simple and straightforward. 
                Follow these four easy steps to get the funds you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 lg:py-20">
        <div className="loanlah-section">
          <div className="loanlah-container">
            <div ref={stepsRef} className="space-y-8">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="step-card loanlah-card p-6 lg:p-8 hover:-translate-y-1 transition-transform duration-200"
                >
                  <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                    {/* Number & Icon */}
                    <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start gap-4">
                      <div className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center`}>
                        <step.icon className="w-7 h-7 text-[#101727]" />
                      </div>
                      <span className="text-4xl font-bold text-[#101727]/20" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-6">
                      <h2 className="loanlah-heading-3 text-[#101727] mb-3">{step.title}</h2>
                      <p className="text-[#6B7280] leading-relaxed mb-4">{step.description}</p>
                      <div className="flex items-center gap-2 text-sm text-[#2F84FF]">
                        <Clock className="w-4 h-4" />
                        <span>{step.time}</span>
                      </div>
                    </div>

                    {/* Details List */}
                    <div className="lg:col-span-4 bg-[#F6F8FE] rounded-2xl p-5">
                      <h3 className="font-semibold text-sm text-[#101727] uppercase tracking-wider mb-3">What happens</h3>
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-[#6B7280]">{detail}</span>
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

      {/* Requirements Section */}
      <section className="py-16 lg:py-20">
        <div className="loanlah-section">
          <div className="loanlah-container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="loanlah-heading-2 text-[#101727] mb-4">What You'll Need</h2>
              <p className="loanlah-body">
                Have these documents ready to make your application process faster and smoother.
              </p>
            </div>

            <div ref={requirementsRef} className="grid md:grid-cols-3 gap-6">
              {requirements.map((req) => (
                <div
                  key={req.title}
                  className="req-card loanlah-card p-6 hover:-translate-y-1 transition-transform duration-200"
                >
                  <div className="w-12 h-12 bg-[#EAF3FF] rounded-xl flex items-center justify-center mb-4">
                    <req.icon className="w-6 h-6 text-[#2F84FF]" />
                  </div>
                  <h3 className="font-semibold text-lg text-[#101727] mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {req.title}
                  </h3>
                  <ul className="space-y-2">
                    {req.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[#6B7280]">{item}</span>
                      </li>
                    ))}
                  </ul>
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
            <div className="loanlah-card p-8 lg:p-12 text-center bg-[#0B1F4F]">
              <h2 className="loanlah-heading-3 text-white mb-4">
                Ready to get started?
              </h2>
              <p className="text-white/70 mb-6 max-w-xl mx-auto">
                Apply now and get a decision in minutes. No paperwork, no branch visits.
              </p>
              <Link to="/contact" className="loanlah-btn-white inline-flex items-center gap-2">
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
