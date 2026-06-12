import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: '1. Introduction',
    content: [
      'Welcome to LoanLah, a lending service operated by Kawan Kredit Sdn Bhd ("we", "us", "our"). By accessing or using our services, you agree to be bound by these Terms and Conditions.',
      'These terms govern your use of our website, mobile applications, and loan services. Please read them carefully before applying for a loan or using our services.',
      'If you do not agree with any part of these terms, you must not use our services.',
    ],
  },
  {
    title: '2. Eligibility',
    content: [
      'To be eligible for our loan services, you must:',
      '• Be a Malaysian citizen or permanent resident',
      '• Be at least 21 years old and not more than 60 years old',
      '• Have a valid Malaysian Identity Card (IC)',
      '• Have a stable monthly income of at least RM 2,000',
      '• Have an active Malaysian bank account',
      '• Not be declared bankrupt',
      'We reserve the right to verify your eligibility and reject any application that does not meet our criteria.',
    ],
  },
  {
    title: '3. Loan Application Process',
    content: [
      'All loan applications are subject to our credit assessment and approval process.',
      'You must provide accurate and complete information in your application. Providing false or misleading information may result in rejection of your application and possible legal action.',
      'We reserve the right to request additional documentation to verify your identity, income, and other information provided.',
      'Approval of a loan application is at our sole discretion and is not guaranteed.',
    ],
  },
  {
    title: '4. Interest Rates and Fees',
    content: [
      'Interest rates range from 1.0% to 2.0% per month, depending on your credit profile and the type of loan.',
      'A processing fee of 2% to 4% of the loan amount will be deducted from the disbursement.',
      'Late payment fees may be charged if you fail to make payments on time.',
      'All fees and charges will be clearly disclosed in your loan agreement before you accept the offer.',
    ],
  },
  {
    title: '5. Repayment',
    content: [
      'You agree to repay the loan according to the repayment schedule specified in your loan agreement.',
      'Payments must be made on or before the due date each month.',
      'You may make early repayments or settle your loan in full at any time without penalty.',
      'If you anticipate difficulty making a payment, you must contact us immediately to discuss possible arrangements.',
    ],
  },
  {
    title: '6. Default and Consequences',
    content: [
      'Failure to make payments as agreed constitutes a default.',
      'In case of default, we may:',
      '• Charge late payment fees',
      '• Report the default to credit bureaus',
      '• Engage collection agencies',
      '• Take legal action to recover the debt',
      'You will be responsible for all costs associated with debt recovery.',
    ],
  },
  {
    title: '7. Privacy and Data Protection',
    content: [
      'We collect and process your personal data in accordance with our Privacy Policy and applicable laws.',
      'By using our services, you consent to the collection, use, and disclosure of your personal data as described in our Privacy Policy.',
    ],
  },
  {
    title: '8. Limitation of Liability',
    content: [
      'To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages.',
      'Our total liability shall not exceed the amount of the loan principal.',
    ],
  },
  {
    title: '9. Governing Law',
    content: [
      'These Terms and Conditions are governed by the laws of Malaysia.',
      'Any disputes shall be subject to the exclusive jurisdiction of the courts of Malaysia.',
    ],
  },
  {
    title: '10. Changes to Terms',
    content: [
      'We may update these Terms and Conditions from time to time.',
      'Continued use of our services after changes constitutes acceptance of the updated terms.',
      'The current version will always be available on our website.',
    ],
  },
];

export default function TermsPage() {
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
                  Terms & Conditions
                </h1>
                <p className="text-[#6B7280]">
                  Last updated: {new Date().toLocaleDateString('en-MY', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              <div ref={contentRef} className="loanlah-card p-8 lg:p-12">
                <div className="prose prose-lg max-w-none">
                  <p className="text-[#6B7280] mb-8">
                    Please read these Terms and Conditions carefully before using our services. 
                    By accessing or using LoanLah services, you agree to be bound by these terms.
                  </p>

                  <div className="space-y-8">
                    {sections.map((section, index) => (
                      <div key={index} className="border-b border-[#101727]/8 pb-8 last:border-0 last:pb-0">
                        <h2 className="font-semibold text-xl text-[#101727] mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          {section.title}
                        </h2>
                        <div className="space-y-2">
                          {section.content.map((paragraph, pIndex) => (
                            <p key={pIndex} className="text-[#6B7280] leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 pt-8 border-t border-[#101727]/8">
                    <p className="text-sm text-[#6B7280]">
                      If you have any questions about these Terms and Conditions, please contact us at{' '}
                      <a href="mailto:info@loanlah.my" className="text-[#2F84FF] hover:underline">
                        info@loanlah.my
                      </a>{' '}
                      or call us at{' '}
                      <a href="tel:0127128222" className="text-[#2F84FF] hover:underline">
                        012-712 8222
                      </a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
