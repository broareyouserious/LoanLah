import { useEffect, useRef } from 'react';
import { Eye, Calendar, HeadphonesIcon, HeartHandshake, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'No hidden fees',
    description: 'What you see is what you pay. All costs clearly shown upfront before you commit.',
    icon: Eye,
  },
  {
    title: 'Flexible repayments',
    description: 'Choose a repayment schedule that fits your budget. Adjust when life changes.',
    icon: Calendar,
  },
  {
    title: 'Fast support',
    description: 'Our friendly team is here to help. Get answers when you need them.',
    icon: HeadphonesIcon,
  },
  {
    title: 'Responsible lending',
    description: 'We only lend what you can afford. Your financial wellbeing comes first.',
    icon: HeartHandshake,
  },
];

export default function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left content animation
      gsap.fromTo(
        leftRef.current,
        { x: -60, opacity: 0 },
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

      // Cards animation
      const cards = cardsRef.current?.querySelectorAll('.feature-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { x: 60, opacity: 0, rotate: 1 },
          {
            x: 0,
            opacity: 1,
            rotate: 0,
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
            opacity: 0.2,
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
        <div className="dot absolute w-2 h-2 rounded-full bg-[#2F84FF]" style={{ left: '45%', top: '10%' }} />
        <div className="dot absolute w-2 h-2 rounded-full bg-[#2F84FF]" style={{ left: '47%', top: '12%' }} />
        <div className="dot absolute w-2 h-2 rounded-full bg-[#2F84FF]" style={{ left: '3%', top: '85%' }} />
        <div className="dot absolute w-2 h-2 rounded-full bg-[#2F84FF]" style={{ left: '5%', top: '88%' }} />
      </div>

      <div className="loanlah-section relative z-10">
        <div className="loanlah-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Sticky Title */}
            <div ref={leftRef} className="lg:sticky lg:top-32">
              <h2 className="loanlah-heading-2 text-[#101727] mb-4">
                Built for fairness
              </h2>
              <p className="loanlah-body mb-6 max-w-md">
                No hidden fees. No confusing terms. Just a simple, responsible loan that puts you first.
              </p>
              <Link
                to="/fees"
                className="inline-flex items-center gap-2 text-[#2F84FF] font-semibold text-sm hover:gap-3 transition-all duration-200"
              >
                See our fees
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Column - Feature Cards */}
            <div ref={cardsRef} className="grid sm:grid-cols-2 gap-4 lg:gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="feature-card loanlah-card p-5 lg:p-6 hover:-translate-y-1.5 transition-transform duration-200 cursor-default"
                >
                  <div className="w-10 h-10 bg-[#EAF3FF] rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5 text-[#2F84FF]" />
                  </div>
                  <h3 className="font-semibold text-lg text-[#101727] mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {feature.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
