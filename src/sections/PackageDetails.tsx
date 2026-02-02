import { useEffect, useRef, useState } from 'react';
import { Check, X, Bus, Ticket, Home, Utensils, Receipt, User, Droplets } from 'lucide-react';

const includes = [
  { icon: Bus, text: 'Travel by 21-seater non-AC bus for all transfer & sightseeing' },
  { icon: Ticket, text: 'All entry tickets including mentioned activities' },
  { icon: Home, text: 'Accommodation in quad share basis' },
  { icon: Utensils, text: 'Three meals a day (Breakfast, Lunch, Dinner)' },
  { icon: Receipt, text: 'All Toll, Parking, Permit, Tax, Driver & Bata' },
  { icon: User, text: 'Professional tour manager throughout journey' },
  { icon: Droplets, text: 'Packaged drinking water' },
];

const excludes = [
  'All personal expense',
  'Videography charges',
  'Laundry, Porter charges',
  'Any boating cruise & activities charges not mentioned above',
  'All extra meals & Beverages',
  'Travel insurance',
];

export default function PackageDetails() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="package"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-brand-dark overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-brand-light-blue/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block text-sm font-medium text-brand-blue uppercase tracking-widest mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            What&apos;s Included
          </span>
          <h2
            className={`font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Package
            <span className="text-brand-blue"> Details</span>
          </h2>
          <p
            className={`text-lg text-white/60 max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            Everything you need for a hassle-free adventure
          </p>
        </div>

        {/* Package Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Includes */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="relative h-full bg-gradient-to-br from-emerald-900/30 to-brand-dark rounded-3xl p-8 border border-emerald-500/20 overflow-hidden">
              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                    <Check className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-white">Package Includes</h3>
                </div>

                <div className="space-y-4">
                  {includes.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                        <item.icon className="w-5 h-5 text-emerald-400" />
                      </div>
                      <p className="text-white/80 text-sm leading-relaxed pt-2">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Excludes */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="relative h-full bg-gradient-to-br from-rose-900/30 to-brand-dark rounded-3xl p-8 border border-rose-500/20 overflow-hidden">
              {/* Glow Effect */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-rose-500/20 rounded-xl flex items-center justify-center">
                    <X className="w-6 h-6 text-rose-400" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-white">Package Excludes</h3>
                </div>

                <div className="space-y-4">
                  {excludes.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-rose-500/20 rounded-lg flex items-center justify-center group-hover:bg-rose-500/30 transition-colors">
                        <X className="w-5 h-5 text-rose-400" />
                      </div>
                      <p className="text-white/80 text-sm leading-relaxed pt-2">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div
          className={`mt-12 grid sm:grid-cols-3 gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          {[
            { label: 'Transport', value: '21-Seater Non-AC Bus' },
            { label: 'Meals', value: '3 Meals Per Day' },
            { label: 'Stay', value: 'Quad Share Basis' },
          ].map((info, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-brand-blue/30 transition-colors"
            >
              <div className="text-sm text-white/50 mb-2">{info.label}</div>
              <div className="font-display text-xl font-semibold text-white">{info.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
