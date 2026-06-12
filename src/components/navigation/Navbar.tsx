import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Loan Products', href: '/loans' },
  { name: 'Calculator', href: '/calculator' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F6F8FE]/95 backdrop-blur-md border-b border-[#101727]/8 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="loanlah-section">
          <div className="loanlah-container">
            <div className="flex items-center justify-between h-[72px]">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#2F84FF] rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">L</span>
                </div>
                <span className="font-bold text-xl text-[#101727]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  LoanLah
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                      location.pathname === link.href
                        ? 'text-[#2F84FF] bg-[#2F84FF]/10'
                        : 'text-[#6B7280] hover:text-[#101727] hover:bg-[#101727]/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* CTA Button */}
              <div className="hidden lg:block">
                <Link to="/contact" className="loanlah-btn-primary text-sm inline-flex items-center gap-2">
                  Apply Now
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl hover:bg-[#101727]/5 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#101727]" />
                ) : (
                  <Menu className="w-6 h-6 text-[#101727]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-[#0B1F4F]/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
        <div
          className={`absolute top-[72px] left-4 right-4 bg-white rounded-3xl shadow-2xl p-6 transition-all duration-300 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
                  location.pathname === link.href
                    ? 'text-[#2F84FF] bg-[#2F84FF]/10'
                    : 'text-[#101727] hover:bg-[#F6F8FE]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-[#101727]/8">
              <Link to="/contact" className="loanlah-btn-primary w-full justify-center text-center inline-flex items-center gap-2">
                Apply Now
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
