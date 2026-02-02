import { useEffect, useState, useRef } from 'react';
import { ArrowRight, MapPin, Calendar, Users } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const whatsappLink = `https://wa.me/919972792615?text=Hi%20BURAQ_TRAVELHUB!%20I'm%20interested%20in%20booking%20the%20Mangalore-Dandeli-Goa%20tour.%20Please%20share%20more%20details.`;

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
          style={{
            backgroundImage: 'url(/hero-bg.jpg)',
            transform: 'scale(1.1)',
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/50" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-brand-light-blue/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/20 backdrop-blur-sm rounded-full mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <span className="w-2 h-2 bg-brand-blue rounded-full animate-pulse" />
            <span className="text-sm font-medium text-brand-light-blue uppercase tracking-wider">
              Adventure Awaits
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            {['Mangalore', '•', 'Dandeli', '•', 'Goa'].map((word, index) => (
              <span
                key={index}
                className={`inline-block transition-all duration-800 ${
                  isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-20 rotate-x-45'
                } ${word === '•' ? 'text-brand-blue mx-2' : ''}`}
                style={{
                  transitionDelay: `${500 + index * 120}ms`,
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {word}{' '}
              </span>
            ))}
          </h1>

          {/* Subheadline */}
          <p
            className={`text-xl sm:text-2xl text-white/80 font-light mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '900ms' }}
          >
            4 Days of Unforgettable Adventure
          </p>

          {/* Description */}
          <p
            className={`text-base sm:text-lg text-white/60 mb-8 max-w-xl transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '1100ms' }}
          >
            Experience the perfect blend of coastal charm, thrilling water sports, and beach paradise. 
            Your journey begins here with BURAQ_TRAVELHUB.
          </p>

          {/* Quick Info */}
          <div
            className={`flex flex-wrap gap-6 mb-10 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '1200ms' }}
          >
            <div className="flex items-center gap-2 text-white/70">
              <Calendar className="w-5 h-5 text-brand-blue" />
              <span className="text-sm">4 Days / 3 Nights</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <MapPin className="w-5 h-5 text-brand-blue" />
              <span className="text-sm">3 Destinations</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Users className="w-5 h-5 text-brand-blue" />
              <span className="text-sm">21-Seater Bus</span>
            </div>
          </div>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '1300ms' }}
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-brand-blue text-white font-medium rounded-full hover:bg-brand-light-blue hover:text-brand-dark transition-all duration-300 hover:scale-105 hover:shadow-glow-lg"
            >
              Book Your Trip
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#itinerary"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#itinerary')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-medium rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              View Itinerary
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent z-[5]" />

      {/* Decorative Elements */}
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-brand-light-blue/10 rounded-full blur-2xl pointer-events-none" />
    </section>
  );
}
