import { useEffect, useRef } from 'react';
import { Target, Heart, Shield, Users, Building2, FileCheck, MapPin, Phone, Mail } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    title: 'Transparency',
    description: 'We believe in complete honesty. No hidden fees, no surprises.',
    icon: Shield,
  },
  {
    title: 'Fairness',
    description: 'Everyone deserves access to fair financial solutions.',
    icon: Heart,
  },
  {
    title: 'Responsibility',
    description: 'We lend responsibly, ensuring you can manage your repayments.',
    icon: Target,
  },
  {
    title: 'Customer First',
    description: 'Your needs drive everything we do. We\'re here to help.',
    icon: Users,
  },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

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
        contentRef.current,
        { y: 60, opacity: 0 },
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

      const valueCards = valuesRef.current?.querySelectorAll('.value-card');
      if (valueCards) {
        gsap.fromTo(
          valueCards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: valuesRef.current,
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

  return (
    <main className="w-full pt-[72px] bg-[#F6F8FE]">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="loanlah-section">
          <div className="loanlah-container">
            <div ref={heroRef} className="text-center max-w-3xl mx-auto">
              <h1 className="loanlah-heading-1 text-[#101727] mb-6">
                About LoanLah
              </h1>
              <p className="loanlah-body text-lg">
                LoanLah is a lending service operated by <strong className="text-[#101727]">Kawan Kredit Sdn Bhd</strong>. 
                We're on a mission to provide fast, fair, and transparent loans to Malaysians who need them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-20">
        <div className="loanlah-section">
          <div className="loanlah-container">
            <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="loanlah-card p-8 lg:p-10">
                <div className="w-14 h-14 bg-[#EAF3FF] rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-[#2F84FF]" />
                </div>
                <h2 className="loanlah-heading-3 text-[#101727] mb-4">Our Mission</h2>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  To provide fair, transparent, and responsible lending solutions that help Malaysians achieve their financial goals without the stress and confusion of traditional lending.
                </p>
                <p className="text-[#6B7280] leading-relaxed">
                  We believe everyone deserves access to credit when they need it, with clear terms and no hidden surprises.
                </p>
              </div>

              <div className="loanlah-card p-8 lg:p-10">
                <div className="w-14 h-14 bg-[#E8FAF6] rounded-2xl flex items-center justify-center mb-6">
                  <Building2 className="w-7 h-7 text-[#10B981]" />
                </div>
                <h2 className="loanlah-heading-3 text-[#101727] mb-4">Company Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-[#6B7280] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[#101727]">Company Name</p>
                      <p className="text-[#6B7280] text-sm">Kawan Kredit Sdn Bhd</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileCheck className="w-5 h-5 text-[#6B7280] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[#101727]">SSM Registration</p>
                      <p className="text-[#6B7280] text-sm">202401000001 (1234567-A)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#6B7280] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[#101727]">Office Address</p>
                      <p className="text-[#6B7280] text-sm">
                        Lot 5.13, 5th Floor, Wisma Lim Foo Yong<br />
                        86, Jalan Raja Chulan<br />
                        50200 Kuala Lumpur
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#6B7280] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[#101727]">Contact</p>
                      <p className="text-[#6B7280] text-sm">012-712 8222</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#6B7280] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[#101727]">Email</p>
                      <p className="text-[#6B7280] text-sm">info@loanlah.my</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-20">
        <div className="loanlah-section">
          <div className="loanlah-container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="loanlah-heading-2 text-[#101727] mb-4">Our Values</h2>
              <p className="loanlah-body">
                These principles guide everything we do at LoanLah.
              </p>
            </div>

            <div ref={valuesRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="value-card loanlah-card p-6 text-center hover:-translate-y-1.5 transition-transform duration-200"
                >
                  <div className="w-12 h-12 bg-[#EAF3FF] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-[#2F84FF]" />
                  </div>
                  <h3 className="font-semibold text-lg text-[#101727] mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {value.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
