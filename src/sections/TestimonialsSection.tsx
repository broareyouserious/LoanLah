import { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Aisyah R.',
    role: 'Teacher',
    quote: 'The clearest loan I\'ve ever used. The calculator made it easy to decide how much to borrow. No surprises, no stress.',
    avatar: '/images/testimonial-avatar-1.jpg',
  },
  {
    name: 'Hakim S.',
    role: 'Designer',
    quote: 'Fast approval and friendly support. Felt safe from start to finish. Would definitely recommend to friends and family.',
    avatar: '/images/testimonial-avatar-2.jpg',
  },
];

export default function TestimonialsSection() {
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
      const cards = cardsRef.current?.querySelectorAll('.testimonial-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 100, opacity: 0, rotate: -1 },
          {
            y: 0,
            opacity: 1,
            rotate: 0,
            duration: 0.8,
            stagger: 0.15,
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

      // Avatars animation
      const avatars = cardsRef.current?.querySelectorAll('.avatar');
      if (avatars) {
        gsap.fromTo(
          avatars,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: 'back.out(1.6)',
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
              People love LoanLah
            </h2>
            <p className="loanlah-body">
              See what our customers have to say about their experience with us.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div ref={cardsRef} className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="testimonial-card loanlah-card p-6 lg:p-8 relative hover:-translate-y-1.5 transition-transform duration-200"
              >
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-[#2F84FF] mb-4" />

                {/* Quote Text */}
                <p className="text-[#101727] text-lg leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="avatar w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                  />
                  <div>
                    <p className="font-semibold text-[#101727]">{testimonial.name}</p>
                    <p className="text-sm text-[#6B7280]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
