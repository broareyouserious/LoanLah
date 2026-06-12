import { useEffect, useRef, useState } from 'react';
import { Download, ArrowRight, FileText, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CalculatorSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const calculatorRef = useRef<HTMLDivElement>(null);
  const infoCardsRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const [loanAmount, setLoanAmount] = useState(10000);
  const [duration, setDuration] = useState(12);

  // Calculate monthly repayment (simplified formula for demo)
  const interestRate = 0.015; // 1.5% monthly
  const monthlyRepayment = Math.round(
    (loanAmount * interestRate * Math.pow(1 + interestRate, duration)) /
      (Math.pow(1 + interestRate, duration) - 1)
  );
  const totalRepayment = monthlyRepayment * duration;

  useEffect(() => {
    // Animate result when values change
    if (resultRef.current) {
      gsap.fromTo(
        resultRef.current,
        { y: -6, color: '#2F84FF' },
        { y: 0, color: '#101727', duration: 0.2, ease: 'power2.out' }
      );
    }
  }, [monthlyRepayment]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Calculator card animation
      gsap.fromTo(
        calculatorRef.current,
        { x: -80, opacity: 0, scale: 0.98 },
        {
          x: 0,
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

      // Info cards animation
      const infoCards = infoCardsRef.current?.querySelectorAll('.info-card');
      if (infoCards) {
        gsap.fromTo(
          infoCards,
          { x: 80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: infoCardsRef.current,
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
              trigger: sectionRef.current,
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
        <div className="dot absolute w-2 h-2 rounded-full bg-[#2F84FF]" style={{ left: '48%', top: '8%' }} />
        <div className="dot absolute w-2 h-2 rounded-full bg-[#2F84FF]" style={{ left: '50%', top: '10%' }} />
        <div className="dot absolute w-2 h-2 rounded-full bg-[#2F84FF]" style={{ left: '52%', top: '8%' }} />
        <div className="dot absolute w-2 h-2 rounded-full bg-[#2F84FF]" style={{ left: '96%', top: '90%' }} />
      </div>

      <div className="loanlah-section relative z-10">
        <div className="loanlah-container">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Calculator Card */}
            <div ref={calculatorRef} className="loanlah-card p-6 lg:p-8">
              <h3 className="font-semibold text-2xl text-[#101727] mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Borrow what you need
              </h3>

              {/* Loan Amount Slider */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-[#6B7280]">Loan Amount</label>
                  <span className="text-lg font-semibold text-[#101727]">
                    RM {loanAmount.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="50000"
                  step="1000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-[#6B7280] mt-2">
                  <span>RM 1,000</span>
                  <span>RM 50,000</span>
                </div>
              </div>

              {/* Duration Slider */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-[#6B7280]">Duration</label>
                  <span className="text-lg font-semibold text-[#101727]">
                    {duration} months
                  </span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="24"
                  step="1"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-[#6B7280] mt-2">
                  <span>3 months</span>
                  <span>24 months</span>
                </div>
              </div>

              {/* Result */}
              <div className="bg-[#F6F8FE] rounded-2xl p-5 mb-6">
                <p className="text-sm text-[#6B7280] mb-1">Monthly repayment (est.)</p>
                <div ref={resultRef} className="text-3xl font-bold text-[#101727]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  RM {monthlyRepayment.toLocaleString()}
                </div>
                <p className="text-xs text-[#6B7280] mt-2">
                  Total repayment: RM {totalRepayment.toLocaleString()}
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact" className="loanlah-btn-primary flex-1 justify-center text-center inline-flex items-center gap-2">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button className="loanlah-btn-secondary flex-1 justify-center inline-flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Estimate
                </button>
              </div>
            </div>

            {/* Info Cards */}
            <div ref={infoCardsRef} className="flex flex-col gap-4 lg:gap-6">
              <div className="info-card loanlah-card p-6 hover:-translate-y-1.5 transition-transform duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E8FAF6] rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-[#101727]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-[#101727] mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Transparent terms
                    </h4>
                    <p className="text-[#6B7280] text-sm leading-relaxed">
                      Interest is calculated daily. No early repayment penalties. All fees clearly displayed before you apply.
                    </p>
                  </div>
                </div>
              </div>

              <div className="info-card loanlah-card p-6 hover:-translate-y-1.5 transition-transform duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F1F0FA] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-[#101727]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-[#101727] mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Support
                    </h4>
                    <p className="text-[#6B7280] text-sm leading-relaxed">
                      Chat with us if you need to change your repayment date. Our team is here to help you manage your loan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
