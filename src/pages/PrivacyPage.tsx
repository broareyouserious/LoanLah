import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: '1. Introduction',
    content: [
      'Kawan Kredit Sdn Bhd ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information.',
      'By using our services, you consent to the practices described in this Privacy Policy.',
    ],
  },
  {
    title: '2. Information We Collect',
    content: [
      'We may collect the following types of personal information:',
      '• Identity Information: Name, IC number, date of birth, nationality',
      '• Contact Information: Address, phone number, email address',
      '• Financial Information: Income, employment details, bank account information',
      '• Transaction Information: Loan history, payment records',
      '• Device Information: IP address, browser type, device identifiers',
      '• Usage Information: How you interact with our website and services',
    ],
  },
  {
    title: '3. How We Collect Information',
    content: [
      'We collect information through:',
      '• Direct interactions when you apply for loans or contact us',
      '• Automated technologies such as cookies and similar tracking technologies',
      '• Third-party sources such as credit bureaus and identity verification services',
      '• Publicly available sources',
    ],
  },
  {
    title: '4. How We Use Your Information',
    content: [
      'We use your personal information for:',
      '• Processing and evaluating loan applications',
      '• Managing your loan account and processing payments',
      '• Communicating with you about your account and our services',
      '• Verifying your identity and preventing fraud',
      '• Complying with legal and regulatory requirements',
      '• Improving our products and services',
      '• Marketing and promotional purposes (with your consent)',
    ],
  },
  {
    title: '5. How We Share Your Information',
    content: [
      'We may share your personal information with:',
      '• Service providers who perform services on our behalf',
      '• Credit bureaus and financial institutions',
      '• Regulatory authorities and law enforcement agencies',
      '• Professional advisors such as lawyers and auditors',
      '• Business partners (with your consent)',
      'We do not sell your personal information to third parties.',
    ],
  },
  {
    title: '6. Data Security',
    content: [
      'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
      'These measures include encryption, access controls, and regular security assessments.',
      'However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    title: '7. Data Retention',
    content: [
      'We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including satisfying legal, regulatory, tax, accounting, and reporting requirements.',
      'After the retention period, your personal information will be securely deleted or anonymized.',
    ],
  },
  {
    title: '8. Your Rights',
    content: [
      'Under Malaysian data protection laws, you have the right to:',
      '• Access your personal information',
      '• Correct inaccurate or incomplete information',
      '• Request deletion of your personal information',
      '• Object to or restrict processing of your information',
      '• Withdraw consent (where processing is based on consent)',
      '• Lodge a complaint with the relevant authority',
      'To exercise these rights, please contact us using the details provided below.',
    ],
  },
  {
    title: '9. Cookies and Tracking',
    content: [
      'We use cookies and similar tracking technologies to enhance your experience on our website.',
      'Cookies help us understand how you use our website and enable certain features.',
      'You can manage your cookie preferences through your browser settings.',
    ],
  },
  {
    title: '10. Changes to This Policy',
    content: [
      'We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.',
      'We will notify you of any material changes by posting the updated policy on our website.',
      'Continued use of our services after changes constitutes acceptance of the updated policy.',
    ],
  },
  {
    title: '11. Contact Us',
    content: [
      'If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:',
      'Kawan Kredit Sdn Bhd',
      'Email: privacy@loanlah.my',
      'Phone: 012-712 8222',
      'Address: Lot 5.13, 5th Floor, Wisma Lim Foo Yong, 86, Jalan Raja Chulan, 50200 Kuala Lumpur',
    ],
  },
];

export default function PrivacyPage() {
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
                  Privacy Policy
                </h1>
                <p className="text-[#6B7280]">
                  Last updated: {new Date().toLocaleDateString('en-MY', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              <div ref={contentRef} className="loanlah-card p-8 lg:p-12">
                <div className="prose prose-lg max-w-none">
                  <p className="text-[#6B7280] mb-8">
                    At LoanLah, we take your privacy seriously. This Privacy Policy explains how we 
                    collect, use, and protect your personal information when you use our services.
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
                      By using our services, you acknowledge that you have read and understood this Privacy Policy 
                      and agree to our collection, use, and disclosure of your personal information as described herein.
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
