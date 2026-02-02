import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  scrollY: number;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Destinations', href: '#destinations' },
  { name: 'Itinerary', href: '#itinerary' },
  { name: 'Package', href: '#package' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ scrollY }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const isScrolled = scrollY > 100;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const whatsappLink = `https://wa.me/919972792615?text=Hi%20BURAQ_TRAVELHUB!%20I'm%20interested%20in%20booking%20the%20Mangalore-Dandeli-Goa%20tour.%20Please%20share%20more%20details.`;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className={`flex items-center gap-2 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">B</span>
              </div>
              <span className="font-display text-xl font-semibold text-white">
                BURAQ<span className="text-brand-blue">_</span>TRAVELHUB
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-sm font-medium text-white/80 hover:text-white transition-all duration-300 group ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                  }`}
                  style={{ transitionDelay: `${100 + index * 80}ms` }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-brand-blue transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:flex items-center gap-2 px-5 py-2.5 bg-brand-blue text-white text-sm font-medium rounded-full hover:bg-brand-light-blue hover:text-brand-dark transition-all duration-300 hover:scale-105 hover:shadow-glow ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <Phone className="w-4 h-4" />
              Book Now
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white hover:text-brand-blue transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-brand-dark/95 backdrop-blur-xl" onClick={() => setIsMenuOpen(false)} />
        <div
          className={`absolute top-20 left-4 right-4 bg-brand-dark/90 backdrop-blur-xl rounded-2xl p-6 border border-white/10 transition-all duration-500 ${
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-medium text-white/80 hover:text-white py-2 border-b border-white/10 last:border-0 transition-colors"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {link.name}
              </a>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 px-5 py-3 bg-brand-blue text-white font-medium rounded-full hover:bg-brand-light-blue hover:text-brand-dark transition-all"
            >
              <Phone className="w-5 h-5" />
              Book Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
