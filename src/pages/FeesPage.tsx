import { useEffect, useRef } from 'react';
import { Info, AlertCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const feeStructure = [
  {
    name: 'Processing Fee',
    rate: '2% - 4% of loan amount',
    description: 'One-time fee deducted from loan disbursement. Covers administrative costs of processing your application.',
    example: 'For a RM 10,000 loan: RM 200 - RM 400',
  },
  {
    name: 'Monthly Interest Rate',
    rate: '1.0% - 2.0% per month',
    description: 'Calculated on reducing balance. Actual rate depends on your credit profile and loan type.',
    example: 'For a RM 10,000 loan at 1.5%: ~RM 150/month initially',
  },
  {
    name: 'Late Payment Fee',
    rate: '1% of overdue amount',
    description: 'Charged when payment is not received by the due date. Maximum RM 100 per occurrence.',
    example: 'For RM 500 overdue: RM 5 - RM 100',
  },
  {
    name: 'Early Settlement',
    rate: 'No charge',
    description: 'You can settle your loan early at any time without any penalties or additional fees.',
    example: 'Pay off your loan anytime without extra cost',
  },
  {
    name: 'Loan Restructuring',
    rate: 'RM 50 - RM 100',
    description: 'Fee for modifying loan terms such as extending duration or changing repayment schedule.',
    example: 'One-time fee per restructuring request',
  },
  {
    name: 'Statement Request',
    rate: 'Free - RM 10',
    description: 'E-statements are free. Physical statement copies may incur a small fee.',
    example: 'Digital: Free | Physical: RM 10 per copy',
  },
];

const importantNotes = [
  'All fees and charges are clearly disclosed in your loan agreement before you accept any offer.',
  'Interest is calculated on a reducing balance basis, which means you pay less interest over time as you repay the principal.',
  'There are no hidden fees. Every charge is explained upfront.',
  'Early repayment is always allowed without penalties.',
  'Late payment fees are capped to protect borrowers from excessive charges.',
  'We encourage you to contact us if you anticipate difficulty making payments.',
];

export default function FeesPage() {
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
                  Fee Disclosure
                </h1>
                <p className="loanlah-body">
                  Transparency is our promise. Here's a complete breakdown of all fees and charges associated with our loans.
                </p>
              </div>

              <div ref={contentRef} className="space-y-8">
                {/* Fee Structure Table */}
                <div className="loanlah-card overflow-hidden">
                  <div className="p-6 lg:p-8 border-b border-[#101727]/8">
                    <h2 className="loanlah-heading-3 text-[#101727]">Fee Structure</h2>
                  </div>
                  <div className="divide-y divide-[#101727]/8">
                    {feeStructure.map((fee, index) => (
                      <div key={index} className="p-6 lg:p-8 hover:bg-[#F6F8FE]/50 transition-colors">
                        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6">
                          <div className="lg:col-span-3">
                            <h3 className="font-semibold text-[#101727]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                              {fee.name}
                            </h3>
                          </div>
                          <div className="lg:col-span-3">
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#EAF3FF] text-[#2F84FF] text-sm font-medium">
                              {fee.rate}
                            </span>
                          </div>
                          <div className="lg:col-span-6">
                            <p className="text-sm text-[#6B7280] mb-2">{fee.description}</p>
                            <p className="text-xs text-[#2F84FF]">
                              <Info className="w-3 h-3 inline mr-1" />
                              {fee.example}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Important Notes */}
                <div className="loanlah-card p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#FFF2EC] rounded-xl flex items-center justify-center">
                      <AlertCircle className="w-5 h-5 text-[#F97316]" />
                    </div>
                    <h2 className="loanlah-heading-3 text-[#101727]">Important Notes</h2>
                  </div>
                  <ul className="space-y-3">
                    {importantNotes.map((note, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#2F84FF] mt-2 flex-shrink-0" />
                        <span className="text-[#6B7280] leading-relaxed">{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* APR Example */}
                <div className="loanlah-card p-6 lg:p-8 bg-[#0B1F4F]">
                  <h2 className="loanlah-heading-3 text-white mb-4">Example Loan Cost</h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div>
                      <p className="text-sm text-white/60 mb-1">Loan Amount</p>
                      <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        RM 10,000
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-white/60 mb-1">Duration</p>
                      <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        12 months
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-white/60 mb-1">Interest Rate</p>
                      <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        1.5%/month
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-white/60 mb-1">Total Repayment</p>
                      <p className="text-2xl font-bold text-[#2F84FF]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        ~RM 11,000
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-white/60 mt-6">
                    * This is an illustrative example. Actual costs may vary based on your specific loan terms.
                  </p>
                </div>

                {/* Contact */}
                <div className="text-center">
                  <p className="text-[#6B7280]">
                    Have questions about our fees?{' '}
                    <a href="mailto:info@loanlah.my" className="text-[#2F84FF] hover:underline font-medium">
                      Contact our support team
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
