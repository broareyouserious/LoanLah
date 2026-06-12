import { useEffect, useRef } from 'react';
import { FileText, CheckCircle, Wallet } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Apply online',
    description: 'A short form. No paperwork. No branch visits. Complete your application in just minutes.',
    icon: FileText,
    color: 'bg-[#E8FAF6]',
  },
  {
    number: '02',
    title: 'Get a decision',
    description: 'We review quickly and show you clear terms. No waiting, no uncertainty.',
    icon: CheckCircle,
    color: 'bg-[#F1F0FA]',
  },
  {
    number: '03',
    title: 'Receive money',
    description: 'Funds sent to your bank. Repay in easy instalments. Start using your loan right away.',
    icon: Wallet,
    color: 'bg-[#FFF2EC]',
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
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

      // Cards animation
      const cards = cardsRef.current?.querySelectorAll('.step-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 80, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              end: 'top 45%',
              scrub: true,
            },
          }
        );
      }

      // Dots animation
      const dots = dotsRef.current?.querySelectorAll('.dot');
      if (dots) {
        gsap.fromTo(
          dots,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 0.22,
            duration: 0.5,
            stagger: 0.05,
            ease: 'back.out(1.6)',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 70%',
              end: 'top 50%',
              scrub: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-20 lg:py-28 bg-[#F6F8FE] overflow-hidden">
      {/* Decorative Dots */}
      <div ref={dotsRef} className="absolute inset-0 pointer-events-none">
        <div className="dot absolute w-2 h-2 rounded-full bg-[#2F84FF]" style={{ left: '5%', top: '15%' }} />
        <div className="dot absolute w-2 h-2 rounded-full bg-[#2F84FF]" style={{ left: '7%', top: '18%' }} />
        <div className="dot absolute w-2 h-2 rounded-full bg-[#2F84FF]" style={{ left: '95%', top: '80%' }} />
        <div className="dot absolute w-2 h-2 rounded-full bg-[#2F84FF]" style={{ left: '93%', top: '83%' }} />
      </div>

      <div className="loanlah-section relative z-10">
        <div className="loanlah-container">
          {/* Title Block */}
          <div ref={titleRef} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="loanlah-heading-2 text-[#101727] mb-4">
              3 steps to funds
            </h2>
            <p className="loanlah-body">
              Apply in minutes, get a decision fast, receive money the same day. It's that simple.
            </p>
          </div>

          {/* Steps Grid */}
          <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="step-card group loanlah-card p-6 lg:p-8 hover:-translate-y-1.5 transition-transform duration-200 cursor-default"
              >
                {/* Card Header */}
                <div className={`${step.color} rounded-2xl p-4 mb-6`}>
                  <div className="flex items-center justify-between">
                    <step.icon className="w-6 h-6 text-[#101727]" />
                    <span className="text-2xl font-bold text-[#101727]/30" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <h3 className="font-semibold text-xl text-[#101727] mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {step.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Step Connector (visible on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#2F84FF]/20 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
