import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    content: '012-712 8222',
    href: 'tel:0127128222',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@loanlah.my',
    href: 'mailto:info@loanlah.my',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Mon - Fri: 9AM - 6PM',
    href: null,
  },
];

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
        formRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        infoRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: infoRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <main className="w-full pt-[72px] bg-[#F6F8FE]">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="loanlah-section">
          <div className="loanlah-container">
            <div ref={heroRef} className="text-center max-w-3xl mx-auto">
              <h1 className="loanlah-heading-1 text-[#101727] mb-6">
                Contact Us
              </h1>
              <p className="loanlah-body text-lg">
                Have questions or need assistance? We're here to help. Reach out to us through any of the channels below.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-20">
        <div className="loanlah-section">
          <div className="loanlah-container">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div ref={formRef} className="lg:col-span-2">
                <div className="loanlah-card p-6 lg:p-8">
                  <h2 className="loanlah-heading-3 text-[#101727] mb-6">Send us a message</h2>
                  
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-[#E8FAF6] rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-[#10B981]" />
                      </div>
                      <h3 className="font-semibold text-xl text-[#101727] mb-2">Message Sent!</h3>
                      <p className="text-[#6B7280]">We'll get back to you within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-[#6B7280] mb-2">Full Name</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Your name"
                            className="w-full px-4 py-3 rounded-xl border border-[#101727]/10 bg-white/50 text-[#101727] placeholder:text-[#6B7280]/50 focus:outline-none focus:ring-2 focus:ring-[#2F84FF]/30 focus:border-[#2F84FF] transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#6B7280] mb-2">Email</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="your@email.com"
                            className="w-full px-4 py-3 rounded-xl border border-[#101727]/10 bg-white/50 text-[#101727] placeholder:text-[#6B7280]/50 focus:outline-none focus:ring-2 focus:ring-[#2F84FF]/30 focus:border-[#2F84FF] transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-[#6B7280] mb-2">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="012-345 6789"
                            className="w-full px-4 py-3 rounded-xl border border-[#101727]/10 bg-white/50 text-[#101727] placeholder:text-[#6B7280]/50 focus:outline-none focus:ring-2 focus:ring-[#2F84FF]/30 focus:border-[#2F84FF] transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#6B7280] mb-2">Subject</label>
                          <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-[#101727]/10 bg-white/50 text-[#101727] focus:outline-none focus:ring-2 focus:ring-[#2F84FF]/30 focus:border-[#2F84FF] transition-all"
                          >
                            <option value="">Select a subject</option>
                            <option value="general">General Inquiry</option>
                            <option value="loan">Loan Application</option>
                            <option value="repayment">Repayment Question</option>
                            <option value="complaint">Complaint</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#6B7280] mb-2">Message</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          placeholder="How can we help you?"
                          className="w-full px-4 py-3 rounded-xl border border-[#101727]/10 bg-white/50 text-[#101727] placeholder:text-[#6B7280]/50 focus:outline-none focus:ring-2 focus:ring-[#2F84FF]/30 focus:border-[#2F84FF] transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="loanlah-btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Contact Info Sidebar */}
              <div ref={infoRef} className="space-y-4">
                {/* Quick Contact */}
                <div className="loanlah-card p-6">
                  <h3 className="font-semibold text-lg text-[#101727] mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Quick Contact
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.map((item) => (
                      <div key={item.title} className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-[#EAF3FF] rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-[#2F84FF]" />
                        </div>
                        <div>
                          <p className="text-sm text-[#6B7280]">{item.title}</p>
                          {item.href ? (
                            <a href={item.href} className="font-medium text-[#101727] hover:text-[#2F84FF] transition-colors">
                              {item.content}
                            </a>
                          ) : (
                            <p className="font-medium text-[#101727]">{item.content}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/60127128222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="loanlah-card p-6 bg-[#25D366] hover:bg-[#128C7E] transition-colors block"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-white">Chat on WhatsApp</h3>
                      <p className="text-sm text-white/80">Get instant support</p>
                    </div>
                  </div>
                </a>

                {/* Office Address */}
                <div className="loanlah-card p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#F1F0FA] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#101727]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#101727] mb-1">Office Address</h3>
                      <p className="text-sm text-[#6B7280] leading-relaxed">
                        Kawan Kredit Sdn Bhd<br />
                        Lot 5.13, 5th Floor<br />
                        Wisma Lim Foo Yong<br />
                        86, Jalan Raja Chulan<br />
                        50200 Kuala Lumpur
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="py-16 lg:py-20">
        <div className="loanlah-section">
          <div className="loanlah-container">
            <div className="loanlah-card overflow-hidden p-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8!2d101.7105!3d3.1488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc3629c5c1d4b1%3A0x1e5d9c9c9c9c9c9c!2sWisma%20Lim%20Foo%20Yong!5e0!3m2!1sen!2smy!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '24px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LoanLah Office Location"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
