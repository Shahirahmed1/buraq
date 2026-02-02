import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Mail, Phone, ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const whatsappLink = `https://wa.me/919972792615?text=Hi%20BURAQ_TRAVELHUB!%20I'm%20interested%20in%20booking%20the%20Mangalore-Dandeli-Goa%20tour.%20Please%20share%20more%20details.`;

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-brand-dark overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-light-blue/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Particle Grid */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #2d62ff 1px, transparent 0)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        {/* Top Border */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Sparkle Icon */}
        <div
          className={`inline-flex items-center justify-center w-16 h-16 bg-brand-blue/20 rounded-2xl mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
        >
          <Sparkles className="w-8 h-8 text-brand-blue" />
        </div>

        {/* Headline */}
        <h2
          className={`font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          Ready to Start Your
          <span className="block text-brand-blue">Adventure?</span>
        </h2>

        {/* Subheadline */}
        <p
          className={`text-lg sm:text-xl text-white/60 mb-10 max-w-2xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          Book your Mangalore-Dandeli-Goa trip today and create memories that last a lifetime
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-medium rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(37,211,102,0.4)]"
          >
            {/* Animated Background */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#25D366] to-[#128C7E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-3">
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          <a
            href="tel:+919972792615"
            className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-medium rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            Call Us Now
          </a>
        </div>

        {/* Contact Info Cards */}
        <div
          className={`grid sm:grid-cols-2 gap-4 max-w-lg mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <a
            href="mailto:msuhaib5146@gmail.com"
            className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-brand-blue/30 hover:bg-white/10 transition-all group"
          >
            <div className="w-10 h-10 bg-brand-blue/20 rounded-lg flex items-center justify-center group-hover:bg-brand-blue transition-colors">
              <Mail className="w-5 h-5 text-brand-blue group-hover:text-white transition-colors" />
            </div>
            <div className="text-left">
              <div className="text-xs text-white/50">Email us</div>
              <div className="text-sm text-white">msuhaib5146@gmail.com</div>
            </div>
          </a>

          <a
            href="tel:+919972792615"
            className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-brand-blue/30 hover:bg-white/10 transition-all group"
          >
            <div className="w-10 h-10 bg-brand-blue/20 rounded-lg flex items-center justify-center group-hover:bg-brand-blue transition-colors">
              <Phone className="w-5 h-5 text-brand-blue group-hover:text-white transition-colors" />
            </div>
            <div className="text-left">
              <div className="text-xs text-white/50">Call us</div>
              <div className="text-sm text-white">+91 9972792615</div>
            </div>
          </a>
        </div>

        {/* Instagram Link */}
        <div
          className={`mt-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          <a
            href="https://www.instagram.com/buraq_travelhub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/50 hover:text-brand-blue transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span className="text-sm">@buraq_travelhub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
