import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Clock, FileCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    income: '',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Watermark animation
      gsap.fromTo(
        watermarkRef.current,
        { opacity: 0, scale: 1.06 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
      );

      // Headline lines animation
      const headlineLines = headlineRef.current?.querySelectorAll('.headline-line');
      if (headlineLines) {
        gsap.fromTo(
          headlineLines,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.06, ease: 'power2.out', delay: 0.2 }
        );
      }

      // Subheadline animation
      gsap.fromTo(
        subheadlineRef.current,
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.5 }
      );

      // CTA buttons animation
      gsap.fromTo(
        ctaRef.current,
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.6 }
      );

      // Card animation
      gsap.fromTo(
        cardRef.current,
        { x: 60, opacity: 0, rotate: 1.5 },
        { x: 0, opacity: 1, rotate: 0, duration: 0.9, ease: 'power2.out', delay: 0.3 }
      );

      // Dots animation
      const dots = dotsRef.current?.querySelectorAll('.dot');
      if (dots) {
        gsap.fromTo(
          dots,
          { scale: 0 },
          { scale: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.6)', delay: 0.7 }
        );
      }

      // Scroll-driven parallax
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=40%',
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(headlineRef.current, { y: -40 * progress });
          gsap.set(cardRef.current, { y: -20 * progress, rotate: -0.5 * progress });
          gsap.set(watermarkRef.current, { x: -4 * progress + 'vw' });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#F6F8FE] pt-[72px]"
    >
      {/* Watermark */}
      <div
        ref={watermarkRef}
        className="absolute select-none pointer-events-none z-0"
        style={{
          left: '-6vw',
          top: '10vh',
          fontSize: '28vw',
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 700,
          color: '#E3EAFB',
          lineHeight: 1,
          letterSpacing: '-0.04em',
        }}
      >
        LOANLAH
      </div>

      {/* Decorative Dots */}
      <div ref={dotsRef} className="absolute inset-0 pointer-events-none z-[1]">
        <div className="dot absolute w-2 h-2 rounded-full bg-[#2F84FF]/20" style={{ left: '52%', top: '20%' }} />
        <div className="dot absolute w-2 h-2 rounded-full bg-[#2F84FF]/20" style={{ left: '54%', top: '22%' }} />
        <div className="dot absolute w-2 h-2 rounded-full bg-[#2F84FF]/20" style={{ left: '56%', top: '20%' }} />
        <div className="dot absolute w-2 h-2 rounded-full bg-[#2F84FF]/20" style={{ left: '90%', top: '60%' }} />
        <div className="dot absolute w-2 h-2 rounded-full bg-[#2F84FF]/20" style={{ left: '92%', top: '62%' }} />
        <div className="dot absolute w-2 h-2 rounded-full bg-[#2F84FF]/20" style={{ left: '94%', top: '60%' }} />
      </div>

      <div className="loanlah-section relative z-10">
        <div className="loanlah-container">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-72px)] py-12 lg:py-0">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <div ref={headlineRef} className="mb-6">
                <h1 className="loanlah-heading-1 text-[#101727]">
                  <span className="headline-line block">Fast,</span>
                  <span className="headline-line block">safe &</span>
                  <span className="headline-line block">transparent</span>
                  <span className="headline-line block text-[#2F84FF]">loans.</span>
                </h1>
              </div>

              <p ref={subheadlineRef} className="loanlah-body max-w-md mb-8">
                Apply in minutes. Get a decision in seconds. No paperwork, no hidden fees. A friendly lending service by Kawan Kredit Sdn Bhd.
              </p>

              <div ref={ctaRef} className="flex flex-wrap gap-4 mb-10">
                <Link to="/contact" className="loanlah-btn-primary inline-flex items-center gap-2">
                  Check Eligibility
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/how-it-works" className="loanlah-btn-secondary inline-flex items-center gap-2">
                  How It Works
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <Shield className="w-4 h-4 text-[#2F84FF]" />
                  <span>Licensed & Regulated</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <Clock className="w-4 h-4 text-[#2F84FF]" />
                  <span>Fast Approval</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <FileCheck className="w-4 h-4 text-[#2F84FF]" />
                  <span>No Hidden Fees</span>
                </div>
              </div>
            </div>

            {/* Right Content - Eligibility Card */}
            <div ref={cardRef} className="flex justify-center lg:justify-end">
              <div className="loanlah-card w-full max-w-md p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#2F84FF]/10 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#2F84FF]" />
                  </div>
                  <h3 className="font-semibold text-lg text-[#101727]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Check your eligibility
                  </h3>
                </div>

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#6B7280] mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-xl border border-[#101727]/10 bg-white/50 text-[#101727] placeholder:text-[#6B7280]/50 focus:outline-none focus:ring-2 focus:ring-[#2F84FF]/30 focus:border-[#2F84FF] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#6B7280] mb-2">Mobile Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 012-345 6789"
                      className="w-full px-4 py-3 rounded-xl border border-[#101727]/10 bg-white/50 text-[#101727] placeholder:text-[#6B7280]/50 focus:outline-none focus:ring-2 focus:ring-[#2F84FF]/30 focus:border-[#2F84FF] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#6B7280] mb-2">Monthly Income (RM)</label>
                    <select
                      name="income"
                      value={formData.income}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#101727]/10 bg-white/50 text-[#101727] focus:outline-none focus:ring-2 focus:ring-[#2F84FF]/30 focus:border-[#2F84FF] transition-all"
                    >
                      <option value="">Select monthly income</option>
                      <option value="2000">Below RM 2,000</option>
                      <option value="3000">RM 2,000 - RM 3,000</option>
                      <option value="5000">RM 3,000 - RM 5,000</option>
                      <option value="8000">RM 5,000 - RM 8,000</option>
                      <option value="10000">Above RM 8,000</option>
                    </select>
                  </div>

                  <Link
                    to="/contact"
                    className="loanlah-btn-primary w-full justify-center text-center inline-flex items-center gap-2 mt-2"
                  >
                    Check Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </form>

                <p className="text-xs text-[#6B7280] text-center mt-4">
                  No impact on your credit score. T&Cs apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
