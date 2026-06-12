import { useEffect, useRef } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // CTA card animation
      gsap.fromTo(
        cardRef.current,
        { y: 80, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
          },
        }
      );

      // Buttons animation
      gsap.fromTo(
        buttonsRef.current,
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 65%',
            end: 'top 45%',
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-20 lg:py-28 bg-[#F6F8FE] overflow-hidden">
      <div className="loanlah-section relative z-10">
        <div className="loanlah-container">
          {/* CTA Card */}
          <div
            ref={cardRef}
            className="loanlah-card p-8 lg:p-12 relative overflow-hidden"
          >
            {/* Dot Pattern Background */}
            <div className="absolute inset-0 dot-pattern opacity-30" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div>
                <h2 className="loanlah-heading-2 text-[#101727] mb-4">
                  Ready when you are
                </h2>
                <p className="loanlah-body max-w-md">
                  Check your eligibility in 2 minutes. No paperwork. No pressure. Just a simple, fair loan.
                </p>
              </div>

              {/* Right Content - Buttons */}
              <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <Link
                  to="/contact"
                  className="loanlah-btn-primary inline-flex items-center justify-center gap-2"
                >
                  Check Eligibility
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/60127128222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="loanlah-btn-secondary inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
