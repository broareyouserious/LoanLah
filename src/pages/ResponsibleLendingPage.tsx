import { useEffect, useRef } from 'react';
import { Heart, Shield, Users, AlertTriangle, Phone, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    icon: Heart,
    title: 'Customer First',
    description: 'We put our customers\' financial wellbeing at the center of every decision we make.',
    color: 'bg-[#E8FAF6]',
    iconColor: 'text-[#10B981]',
  },
  {
    icon: Shield,
    title: 'Transparent Practices',
    description: 'All terms, fees, and conditions are clearly communicated before any agreement is signed.',
    color: 'bg-[#EAF3FF]',
    iconColor: 'text-[#2F84FF]',
  },
  {
    icon: Users,
    title: 'Fair Assessment',
    description: 'We evaluate each application individually, considering your unique circumstances.',
    color: 'bg-[#F1F0FA]',
    iconColor: 'text-[#8B5CF6]',
  },
  {
    icon: AlertTriangle,
    title: 'Proactive Support',
    description: 'We reach out to customers who may be experiencing financial difficulty to offer assistance.',
    color: 'bg-[#FFF2EC]',
    iconColor: 'text-[#F97316]',
  },
];

const commitments = [
  'We will only lend amounts that we believe you can reasonably afford to repay.',
  'We will clearly explain all costs, fees, and repayment obligations before you sign.',
  'We will treat you fairly and with respect at all times.',
  'We will provide clear information about our products and services.',
  'We will respond to complaints promptly and fairly.',
  'We will work with you if you experience financial difficulty.',
  'We will protect your personal information and respect your privacy.',
  'We will continuously train our staff on responsible lending practices.',
];

const warningSigns = [
  'You are borrowing to pay off other debts',
  'You are unsure about your ability to make repayments',
  'You do not fully understand the loan terms and costs',
  'You feel pressured to take the loan',
  'The loan is for a non-essential purchase that can wait',
];

export default function ResponsibleLendingPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full pt-[72px] bg-[#F6F8FE]">
      <section className="py-16 lg:py-24">
        <div className="loanlah-section">
          <div className="loanlah-container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="loanlah-heading-1 text-[#101727] mb-4">
                  Responsible Lending Policy
                </h1>
                <p className="loanlah-body">
                  At LoanLah, we are committed to responsible lending practices that protect our customers 
                  and promote financial wellbeing.
                </p>
              </div>

              <div ref={contentRef} className="space-y-8">
                {/* Principles */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {principles.map((principle) => (
                    <div
                      key={principle.title}
                      className="loanlah-card p-6 hover:-translate-y-1 transition-transform duration-200"
                    >
                      <div className={`w-12 h-12 ${principle.color} rounded-xl flex items-center justify-center mb-4`}>
                        <principle.icon className={`w-6 h-6 ${principle.iconColor}`} />
                      </div>
                      <h3 className="font-semibold text-lg text-[#101727] mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {principle.title}
                      </h3>
                      <p className="text-sm text-[#6B7280] leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Our Commitments */}
                <div className="loanlah-card p-6 lg:p-8">
                  <h2 className="loanlah-heading-3 text-[#101727] mb-6">Our Commitments to You</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {commitments.map((commitment, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[#6B7280] leading-relaxed">{commitment}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Assessment Process */}
                <div className="loanlah-card p-6 lg:p-8">
                  <h2 className="loanlah-heading-3 text-[#101727] mb-6">Our Assessment Process</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-[#2F84FF] rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm">
                        1
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#101727] mb-1">Income Verification</h3>
                        <p className="text-sm text-[#6B7280]">
                          We verify your income to ensure you have the capacity to repay the loan.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-[#2F84FF] rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm">
                        2
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#101727] mb-1">Credit History Review</h3>
                        <p className="text-sm text-[#6B7280]">
                          We review your credit history to understand your repayment behavior.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-[#2F84FF] rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm">
                        3
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#101727] mb-1">Affordability Check</h3>
                        <p className="text-sm text-[#6B7280]">
                          We calculate your debt-to-income ratio to ensure the loan is affordable.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-[#2F84FF] rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm">
                        4
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#101727] mb-1">Suitability Assessment</h3>
                        <p className="text-sm text-[#6B7280]">
                          We ensure the loan product is suitable for your needs and circumstances.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Warning Signs */}
                <div className="loanlah-card p-6 lg:p-8 border-l-4 border-[#F97316]">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-6 h-6 text-[#F97316]" />
                    <h2 className="loanlah-heading-3 text-[#101727]">Before You Borrow</h2>
                  </div>
                  <p className="text-[#6B7280] mb-4">
                    Consider carefully before taking a loan. If any of the following apply, 
                    it may be wise to reconsider or seek financial advice:
                  </p>
                  <ul className="space-y-2">
                    {warningSigns.map((sign, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[#F97316] mt-1">•</span>
                        <span className="text-sm text-[#6B7280]">{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Financial Difficulty */}
                <div className="loanlah-card p-6 lg:p-8 bg-[#0B1F4F]">
                  <div className="flex items-center gap-3 mb-4">
                    <Phone className="w-6 h-6 text-white" />
                    <h2 className="loanlah-heading-3 text-white">Experiencing Financial Difficulty?</h2>
                  </div>
                  <p className="text-white/80 mb-6">
                    If you're struggling to make repayments, please contact us immediately. 
                    We have dedicated support to help you through difficult times. We may be able to:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2 text-white/80">
                      <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Reschedule your repayment dates</span>
                    </li>
                    <li className="flex items-start gap-2 text-white/80">
                      <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Restructure your loan terms</span>
                    </li>
                    <li className="flex items-start gap-2 text-white/80">
                      <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Provide a temporary payment holiday</span>
                    </li>
                    <li className="flex items-start gap-2 text-white/80">
                      <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Refer you to financial counseling services</span>
                    </li>
                  </ul>
                  <a
                    href="tel:0127128222"
                    className="inline-flex items-center gap-2 text-[#2F84FF] font-semibold hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    Call us: 012-712 8222
                  </a>
                </div>

                {/* Contact */}
                <div className="text-center">
                  <p className="text-[#6B7280]">
                    Questions about our responsible lending practices?{' '}
                    <a href="mailto:info@loanlah.my" className="text-[#2F84FF] hover:underline font-medium">
                      Contact us
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
