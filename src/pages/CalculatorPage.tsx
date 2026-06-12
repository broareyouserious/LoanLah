import { useEffect, useRef, useState } from 'react';
import { Calculator, Download, ArrowRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CalculatorPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const calculatorRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const [loanAmount, setLoanAmount] = useState(15000);
  const [duration, setDuration] = useState(12);
  const [interestRate, setInterestRate] = useState(1.5);

  // Calculate monthly repayment
  const monthlyInterest = interestRate / 100;
  const monthlyRepayment = Math.round(
    (loanAmount * monthlyInterest * Math.pow(1 + monthlyInterest, duration)) /
      (Math.pow(1 + monthlyInterest, duration) - 1)
  );
  const totalRepayment = monthlyRepayment * duration;
  const totalInterest = totalRepayment - loanAmount;

  useEffect(() => {
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

      gsap.fromTo(
        calculatorRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: calculatorRef.current,
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
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="loanlah-section">
          <div className="loanlah-container">
            <div ref={heroRef} className="text-center max-w-3xl mx-auto">
              <h1 className="loanlah-heading-1 text-[#101727] mb-6">
                Loan Calculator
              </h1>
              <p className="loanlah-body text-lg">
                Plan your loan with confidence. Adjust the amount and duration to see your estimated monthly repayment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 lg:py-20">
        <div className="loanlah-section">
          <div className="loanlah-container">
            <div ref={calculatorRef} className="grid lg:grid-cols-3 gap-8">
              {/* Main Calculator */}
              <div className="lg:col-span-2 loanlah-card p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-[#EAF3FF] rounded-xl flex items-center justify-center">
                    <Calculator className="w-5 h-5 text-[#2F84FF]" />
                  </div>
                  <h2 className="font-semibold text-xl text-[#101727]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Calculate Your Loan
                  </h2>
                </div>

                {/* Loan Amount */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-[#6B7280]">Loan Amount</label>
                    <span className="text-2xl font-bold text-[#101727]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      RM {loanAmount.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="50000"
                    step="500"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-[#6B7280] mt-2">
                    <span>RM 1,000</span>
                    <span>RM 50,000</span>
                  </div>
                </div>

                {/* Duration */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-[#6B7280]">Loan Duration</label>
                    <span className="text-2xl font-bold text-[#101727]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
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

                {/* Interest Rate */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-[#6B7280]">Interest Rate (per month)</label>
                    <span className="text-2xl font-bold text-[#101727]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {interestRate}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="2.0"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-[#6B7280] mt-2">
                    <span>1.0%</span>
                    <span>2.0%</span>
                  </div>
                </div>

                {/* Result */}
                <div className="bg-[#F6F8FE] rounded-2xl p-6 mb-6">
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div>
                      <p className="text-sm text-[#6B7280] mb-1">Monthly Repayment</p>
                      <div ref={resultRef} className="text-3xl font-bold text-[#101727]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        RM {monthlyRepayment.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-[#6B7280] mb-1">Total Repayment</p>
                      <div className="text-xl font-semibold text-[#101727]">
                        RM {totalRepayment.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-[#6B7280] mb-1">Total Interest</p>
                      <div className="text-xl font-semibold text-[#101727]">
                        RM {totalInterest.toLocaleString()}
                      </div>
                    </div>
                  </div>
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

              {/* Info Sidebar */}
              <div className="space-y-4">
                <div className="loanlah-card p-6">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-[#2F84FF] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-[#101727] mb-2">How it works</h3>
                      <p className="text-sm text-[#6B7280] leading-relaxed">
                        This calculator provides an estimate based on the information you provide. 
                        Actual rates may vary based on your credit profile and other factors.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="loanlah-card p-6">
                  <h3 className="font-semibold text-[#101727] mb-4">Important Notes</h3>
                  <ul className="space-y-3 text-sm text-[#6B7280]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#2F84FF]">•</span>
                      Interest is calculated on a reducing balance basis
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2F84FF]">•</span>
                      No early repayment penalties
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2F84FF]">•</span>
                      Processing fees may apply
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2F84FF]">•</span>
                      Late payment fees may be charged
                    </li>
                  </ul>
                </div>

                <div className="loanlah-card p-6 bg-[#0B1F4F]">
                  <h3 className="font-semibold text-white mb-2">Need help?</h3>
                  <p className="text-sm text-white/70 mb-4">
                    Our team is ready to answer your questions and guide you through the application process.
                  </p>
                  <a
                    href="https://wa.me/60127128222"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="loanlah-btn-white w-full justify-center text-center inline-flex items-center gap-2"
                  >
                    Chat with Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
