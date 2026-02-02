import { MapPin, Phone, Mail, Instagram, ArrowUp, Heart } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Destinations', href: '#destinations' },
  { name: 'Itinerary', href: '#itinerary' },
  { name: 'Package', href: '#package' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappLink = `https://wa.me/919972792615?text=Hi%20BURAQ_TRAVELHUB!%20I'm%20interested%20in%20booking%20the%20Mangalore-Dandeli-Goa%20tour.%20Please%20share%20more%20details.`;

  return (
    <footer className="relative bg-brand-dark overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60V30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0Z"
            fill="#061a2b"
            fillOpacity="0.5"
          />
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="relative pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center">
                  <span className="text-white font-display font-bold text-lg">B</span>
                </div>
                <span className="font-display text-xl font-semibold text-white">
                  BURAQ<span className="text-brand-blue">_</span>TRAVELHUB
                </span>
              </a>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Your trusted travel partner for unforgettable adventures across India&apos;s most beautiful destinations.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/buraq_travelhub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white/60 hover:bg-brand-blue hover:text-white transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white/60 hover:bg-[#25D366] hover:text-white transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-white/60 hover:text-brand-blue transition-colors text-sm inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-brand-blue group-hover:w-3 transition-all" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-display text-lg font-semibold text-white mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:msuhaib5146@gmail.com"
                    className="flex items-start gap-3 text-white/60 hover:text-brand-blue transition-colors group"
                  >
                    <Mail className="w-5 h-5 mt-0.5 text-brand-blue" />
                    <span className="text-sm">msuhaib5146@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919972792615"
                    className="flex items-start gap-3 text-white/60 hover:text-brand-blue transition-colors group"
                  >
                    <Phone className="w-5 h-5 mt-0.5 text-brand-blue" />
                    <span className="text-sm">+91 9972792615</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-white/60">
                  <MapPin className="w-5 h-5 mt-0.5 text-brand-blue flex-shrink-0" />
                  <span className="text-sm">Kerala, India</span>
                </li>
              </ul>
            </div>

            {/* Book Now CTA */}
            <div>
              <h4 className="font-display text-lg font-semibold text-white mb-6">Ready to Travel?</h4>
              <p className="text-white/60 text-sm mb-4">
                Book your adventure today and create memories that last a lifetime.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white text-sm font-medium rounded-full hover:bg-brand-light-blue hover:text-brand-dark transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Book via WhatsApp
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm flex items-center gap-1">
              © 2024 BURAQ_TRAVELHUB. Made with <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> in India
            </p>
            
            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-white/40 hover:text-brand-blue transition-colors"
            >
              <span className="text-sm">Back to top</span>
              <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all">
                <ArrowUp className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
