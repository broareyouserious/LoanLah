import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const footerLinks = {
  product: [
    { name: 'Personal Loan', href: '/loans' },
    { name: 'Salary Loan', href: '/loans' },
    { name: 'Business Loan', href: '/loans' },
    { name: 'Loan Calculator', href: '/calculator' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
  ],
  legal: [
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Fee Disclosure', href: '/fees' },
    { name: 'Responsible Lending', href: '/responsible-lending' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#101727]/8">
      <div className="loanlah-section py-16">
        <div className="loanlah-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-[#2F84FF] rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">L</span>
                </div>
                <span className="font-bold text-xl text-[#101727]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  LoanLah
                </span>
              </Link>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-6 max-w-sm">
                Fast, safe & transparent loans in Malaysia. A friendly lending service by Kawan Kredit Sdn Bhd. No hidden fees, clear terms.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:0127128222"
                  className="flex items-center gap-3 text-sm text-[#6B7280] hover:text-[#2F84FF] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  012-712 8222
                </a>
                <a
                  href="mailto:info@loanlah.my"
                  className="flex items-center gap-3 text-sm text-[#6B7280] hover:text-[#2F84FF] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@loanlah.my
                </a>
                <div className="flex items-start gap-3 text-sm text-[#6B7280]">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>
                    Kawan Kredit Sdn Bhd<br />
                    Lot 5.13, 5th Floor, Wisma Lim Foo Yong<br />
                    86, Jalan Raja Chulan<br />
                    50200 Kuala Lumpur
                  </span>
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-semibold text-[#101727] mb-4 text-sm uppercase tracking-wider">Products</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-[#6B7280] hover:text-[#2F84FF] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-[#101727] mb-4 text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-[#6B7280] hover:text-[#2F84FF] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold text-[#101727] mb-4 text-sm uppercase tracking-wider">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-[#6B7280] hover:text-[#2F84FF] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-[#101727]/8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#6B7280] text-center sm:text-left">
              © {new Date().getFullYear()} LoanLah by Kawan Kredit Sdn Bhd. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/60127128222"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white text-sm font-medium rounded-full hover:bg-[#128C7E] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
