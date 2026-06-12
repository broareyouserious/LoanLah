import { useEffect, useRef } from 'react';
import { Shield, Lock, UserCheck, Activity, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const securityFeatures = [
  {
    title: 'Encrypted connections',
    icon: Lock,
  },
  {
    title: 'Verified identity checks',
    icon: UserCheck,
  },
  {
    title: '24/7 fraud monitoring',
    icon: Activity,
  },
];

export default function SecuritySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left text animation
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

      // Right card animation
      gsap.fromTo(
        cardRef.current,
        { x: 80, opacity: 0, rotate: 1.5 },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'top 45%',
            scrub: true,
          },
        }
      );

      // Check circles animation
      const checks = cardRef.current?.querySelectorAll('.check-item');
      if (checks) {
        gsap.fromTo(
          checks,
          { scale: 0 },
          {
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'back.out(1.6)',
            scrollTrigger: {
              trigger: cardRef.current,
              start: 'top 60%',
              end: 'top 40%',
              scrub: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-20 lg:py-28 bg-[#0B1F4F] overflow-hidden">
      <div className="loanlah-section relative z-10">
        <div className="loanlah-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div ref={leftRef}>
              <h2 className="loanlah-heading-2 text-white mb-4">
                Your data is safe
              </h2>
              <p className="text-white/70 text-lg leading-relaxed max-w-md">
                We use encryption, strict access controls, and clear privacy practices. Your information is protected at every step.
              </p>
            </div>

            {/* Right Card */}
            <div ref={cardRef}>
              <div className="bg-white rounded-[28px] p-6 lg:p-8 shadow-2xl">
                {/* Shield Icon */}
                <div className="w-14 h-14 bg-[#EAF3FF] rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-[#2F84FF]" />
                </div>

                <h3 className="font-semibold text-xl text-[#101727] mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Security first
                </h3>

                {/* Security Features */}
                <div className="space-y-4 mb-8">
                  {securityFeatures.map((feature) => (
                    <div key={feature.title} className="check-item flex items-center gap-4">
                      <div className="w-8 h-8 bg-[#E8FAF6] rounded-full flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-4 h-4 text-[#10B981]" />
                      </div>
                      <span className="text-[#101727] font-medium">{feature.title}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to="/privacy"
                  className="inline-flex items-center gap-2 text-[#2F84FF] font-semibold text-sm hover:gap-3 transition-all duration-200"
                >
                  Read our privacy policy
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
