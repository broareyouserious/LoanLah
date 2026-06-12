import { useEffect, useRef } from 'react';
import { Stethoscope, GraduationCap, Home } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useCases = [
  {
    title: 'Medical bills',
    description: 'Cover urgent costs and repay over time. No more financial stress during emergencies.',
    icon: Stethoscope,
    image: '/images/usecase-medical.jpg',
    color: 'bg-[#E8FAF6]',
  },
  {
    title: 'Education',
    description: 'Invest in courses, certifications, or exams. Build your future without breaking the bank.',
    icon: GraduationCap,
    image: '/images/usecase-education.jpg',
    color: 'bg-[#F1F0FA]',
  },
  {
    title: 'Home repairs',
    description: 'Fix what matters without draining savings. Keep your home safe and comfortable.',
    icon: Home,
    image: '/images/usecase-home.jpg',
    color: 'bg-[#FFF2EC]',
  },
];

export default function UseCasesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 60%',
            scrub: true,
          },
        }
      );

      // Cards animation
      const cards = cardsRef.current?.querySelectorAll('.usecase-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 90, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
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

      // Thumbnails animation
      const thumbnails = cardsRef.current?.querySelectorAll('.thumbnail');
      if (thumbnails) {
        gsap.fromTo(
          thumbnails,
          { x: 30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 65%',
              end: 'top 45%',
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
      <div className="loanlah-section relative z-10">
        <div className="loanlah-container">
          {/* Title */}
          <div ref={titleRef} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="loanlah-heading-2 text-[#101727] mb-4">
              A loan that fits your life
            </h2>
            <p className="loanlah-body">
              Whatever you need, we're here to help. Our loans are designed for real life situations.
            </p>
          </div>

          {/* Use Cases Grid */}
          <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="usecase-card loanlah-card p-6 relative overflow-hidden hover:-translate-y-1.5 transition-transform duration-200"
              >
                {/* Icon */}
                <div className={`${useCase.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                  <useCase.icon className="w-6 h-6 text-[#101727]" />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-xl text-[#101727] mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {useCase.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-4">
                  {useCase.description}
                </p>

                {/* Thumbnail Image */}
                <div className="thumbnail relative mt-4 -mx-6 -mb-6">
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-40 object-cover rounded-t-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-t-2xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
