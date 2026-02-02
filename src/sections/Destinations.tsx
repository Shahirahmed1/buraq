import { useEffect, useRef, useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

const destinations = [
  {
    name: 'Mangalore',
    tagline: 'Coastal Gateway',
    description: 'Start your journey from this beautiful coastal city, known for its pristine beaches and rich cultural heritage.',
    image: '/mangalore.jpg',
    highlights: ['Beach Pickup', 'Scenic Views', 'Cultural Hub'],
  },
  {
    name: 'Dandeli',
    tagline: 'Adventure Paradise',
    description: 'Experience thrilling water sports and immerse yourself in the lush greenery of the Western Ghats.',
    image: '/dandeli.jpg',
    highlights: ['White Water Rafting', 'Kayaking', 'Trekking'],
  },
  {
    name: 'Goa',
    tagline: 'Beach Bliss',
    description: 'Unwind on world-famous beaches, explore historic forts, and enjoy the vibrant nightlife.',
    image: '/goa.jpg',
    highlights: ['Beaches', 'Forts', 'Nightlife'],
  },
];

export default function Destinations() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="destinations"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-brand-dark overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />
      <div className="absolute top-40 left-10 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-brand-light-blue/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block text-sm font-medium text-brand-blue uppercase tracking-widest mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Explore Our Worlds
          </span>
          <h2
            className={`font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Three Amazing
            <span className="text-brand-blue"> Destinations</span>
          </h2>
          <p
            className={`text-lg text-white/60 max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            From coastal charm to adventure paradise to beach bliss — experience it all in one incredible journey
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={destination.name}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${400 + index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`relative h-[480px] rounded-3xl overflow-hidden transition-all duration-500 ${
                  hoveredIndex === index ? 'scale-[1.02] shadow-glow-lg' : ''
                }`}
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  {/* Tagline */}
                  <div className="mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-blue/80 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                      <MapPin className="w-3 h-3" />
                      {destination.tagline}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-3xl font-bold text-white mb-2 group-hover:text-brand-light-blue transition-colors">
                    {destination.name}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-sm mb-4 line-clamp-2 group-hover:line-clamp-none transition-all">
                    {destination.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {destination.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded text-xs text-white/80"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="#itinerary"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#itinerary')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 text-brand-light-blue text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                  >
                    View in Itinerary
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Border Glow on Hover */}
                <div
                  className={`absolute inset-0 rounded-3xl border-2 transition-all duration-500 pointer-events-none ${
                    hoveredIndex === index
                      ? 'border-brand-blue/50 shadow-[inset_0_0_30px_rgba(45,98,255,0.2)]'
                      : 'border-transparent'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
