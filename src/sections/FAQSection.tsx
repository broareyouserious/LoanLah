import { useEffect, useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'Who can apply?',
    answer: 'Malaysian citizens or permanent residents aged 21-60 with a stable monthly income of at least RM 2,000. You\'ll need a valid IC and bank account.',
  },
  {
    question: 'How long does approval take?',
    answer: 'Most applications receive an initial decision within minutes. Final approval and fund disbursement typically occur within 1-2 business days after document verification.',
  },
  {
    question: 'What documents do I need?',
    answer: 'You\'ll need your IC (front and back), latest 3 months payslips or bank statements, and proof of address (utility bill or bank statement).',
  },
  {
    question: 'Are there hidden fees?',
    answer: 'Absolutely not. We believe in complete transparency. All fees including processing fees, late payment charges, and interest rates are clearly displayed before you accept any loan offer.',
  },
  {
    question: 'Can I repay early?',
    answer: 'Yes! You can make early repayments or settle your loan in full at any time without penalties. Early repayment may even reduce your total interest.',
  },
  {
    question: 'What if I miss a payment?',
    answer: 'Contact us immediately if you anticipate difficulty. We offer flexible solutions including payment rescheduling. Late fees may apply, but we work with you to find a solution.',
  },
];

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left content animation
      gsap.fromTo(
        leftRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 55%',
            scrub: true,
          },
        }
      );

      // Accordion items animation
      const items = accordionRef.current?.querySelectorAll('.faq-item');
      if (items) {
        gsap.fromTo(
          items,
          { x: 60, opacity: 0, y: 20 },
          {
            x: 0,
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: accordionRef.current,
              start: 'top 75%',
              end: 'top 45%',
              scrub: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="relative w-full py-20 lg:py-28 bg-[#F6F8FE] overflow-hidden">
      <div className="loanlah-section relative z-10">
        <div className="loanlah-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Content */}
            <div ref={leftRef} className="lg:sticky lg:top-32">
              <h2 className="loanlah-heading-2 text-[#101727] mb-4">
                Questions? Answered.
              </h2>
              <p className="loanlah-body max-w-md">
                Everything you need to know before applying. Can't find what you're looking for? Contact our support team.
              </p>
            </div>

            {/* Accordion */}
            <div ref={accordionRef} className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="faq-item loanlah-card overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-[#F6F8FE]/50 transition-colors"
                  >
                    <span className="font-semibold text-[#101727] pr-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        openIndex === index ? 'bg-[#2F84FF] text-white rotate-0' : 'bg-[#F6F8FE] text-[#101727]'
                      }`}
                    >
                      {openIndex === index ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      openIndex === index ? 'max-h-48' : 'max-h-0'
                    }`}
                  >
                    <p className="px-5 pb-5 text-[#6B7280] text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
