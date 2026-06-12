import { useEffect, useRef, useState } from 'react';
import { Plus, Minus, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqCategories = [
  {
    category: 'General Questions',
    items: [
      {
        question: 'Who can apply for a LoanLah loan?',
        answer: 'Malaysian citizens or permanent residents aged 21-60 with a stable monthly income of at least RM 2,000 can apply. You\'ll need a valid IC, bank account, and proof of income.',
      },
      {
        question: 'How much can I borrow?',
        answer: 'Loan amounts range from RM 1,000 to RM 50,000 depending on your income, credit history, and the type of loan. Our calculator can help you estimate your eligible amount.',
      },
      {
        question: 'How long does the approval process take?',
        answer: 'Most applications receive an initial decision within minutes. Final approval and fund disbursement typically occur within 1-2 business days after we verify your documents.',
      },
    ],
  },
  {
    category: 'Application & Documents',
    items: [
      {
        question: 'What documents do I need to apply?',
        answer: 'You\'ll need your IC (front and back), latest 3 months payslips or bank statements, and proof of address (utility bill or bank statement). Business loans require additional business registration documents.',
      },
      {
        question: 'Can I apply if I\'m self-employed?',
        answer: 'Yes, self-employed individuals can apply. You\'ll need to provide your business registration documents, latest 6 months bank statements, and tax returns or Form B/BE.',
      },
      {
        question: 'Is there an application fee?',
        answer: 'No, applying for a loan with LoanLah is completely free. You only pay the processing fee after your loan is approved and you accept the offer.',
      },
    ],
  },
  {
    category: 'Interest & Fees',
    items: [
      {
        question: 'Are there hidden fees?',
        answer: 'Absolutely not. We believe in complete transparency. All fees including processing fees, late payment charges, and interest rates are clearly displayed before you accept any loan offer.',
      },
      {
        question: 'How is interest calculated?',
        answer: 'Interest is calculated on a reducing balance basis, which means you pay interest only on the outstanding principal. This can save you money compared to flat rate interest.',
      },
      {
        question: 'What is the processing fee?',
        answer: 'The processing fee ranges from 2% to 4% of the loan amount, depending on your credit profile. This fee is deducted from your loan disbursement.',
      },
    ],
  },
  {
    category: 'Repayment',
    items: [
      {
        question: 'Can I repay my loan early?',
        answer: 'Yes! You can make early repayments or settle your loan in full at any time without penalties. Early repayment may even reduce your total interest.',
      },
      {
        question: 'What happens if I miss a payment?',
        answer: 'Contact us immediately if you anticipate difficulty. We offer flexible solutions including payment rescheduling. Late fees may apply, but we work with you to find a solution.',
      },
      {
        question: 'Can I change my repayment date?',
        answer: 'Yes, you can request to change your repayment date. Contact our support team at least 5 business days before your next due date to make arrangements.',
      },
    ],
  },
];

export default function FAQPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

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

      const categories = categoriesRef.current?.querySelectorAll('.faq-category');
      if (categories) {
        gsap.fromTo(
          categories,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: categoriesRef.current,
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

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isOpen = (categoryIndex: number, itemIndex: number) => {
    return openItems[`${categoryIndex}-${itemIndex}`] || false;
  };

  return (
    <main className="w-full pt-[72px] bg-[#F6F8FE]">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="loanlah-section">
          <div className="loanlah-container">
            <div ref={heroRef} className="text-center max-w-3xl mx-auto">
              <h1 className="loanlah-heading-1 text-[#101727] mb-6">
                Frequently Asked Questions
              </h1>
              <p className="loanlah-body text-lg">
                Find answers to common questions about our loans, application process, and repayment options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 lg:py-20">
        <div className="loanlah-section">
          <div className="loanlah-container">
            <div ref={categoriesRef} className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={category.category} className="faq-category">
                  <h2 className="loanlah-heading-3 text-[#101727] mb-6">{category.category}</h2>
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="loanlah-card overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(categoryIndex, itemIndex)}
                          className="w-full flex items-center justify-between p-5 text-left hover:bg-[#F6F8FE]/50 transition-colors"
                        >
                          <span className="font-semibold text-[#101727] pr-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            {item.question}
                          </span>
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                              isOpen(categoryIndex, itemIndex) ? 'bg-[#2F84FF] text-white' : 'bg-[#F6F8FE] text-[#101727]'
                            }`}
                          >
                            {isOpen(categoryIndex, itemIndex) ? (
                              <Minus className="w-4 h-4" />
                            ) : (
                              <Plus className="w-4 h-4" />
                            )}
                          </div>
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-out ${
                            isOpen(categoryIndex, itemIndex) ? 'max-h-48' : 'max-h-0'
                          }`}
                        >
                          <p className="px-5 pb-5 text-[#6B7280] leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-20">
        <div className="loanlah-section">
          <div className="loanlah-container">
            <div className="loanlah-card p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="loanlah-heading-3 text-[#101727] mb-4">
                    Still have questions?
                  </h2>
                  <p className="text-[#6B7280] leading-relaxed">
                    Our friendly support team is here to help. Reach out to us via WhatsApp or phone, 
                    and we'll get back to you as soon as possible.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                  <a
                    href="https://wa.me/60127128222"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#128C7E] transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Us
                  </a>
                  <Link to="/contact" className="loanlah-btn-secondary inline-flex items-center justify-center gap-2">
                    Contact Page
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
