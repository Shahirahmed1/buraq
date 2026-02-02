import { useEffect, useRef, useState } from 'react';
import { Compass, Heart, Shield } from 'lucide-react';

const features = [
  {
    icon: Compass,
    title: 'Variety of Destinations',
    description: 'We offer a wide selection of tours around India, from coastal getaways to mountain adventures.',
  },
  {
    icon: Heart,
    title: 'Individual Approach',
    description: 'Our experienced specialists will help you make a route based on your interests, budget and time.',
  },
  {
    icon: Shield,
    title: 'Quality & Safety',
    description: 'We cooperate only with trusted partners and hotels to provide you with a comfortable stay.',
  },
];

export default function About() {
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

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-brand-gray overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #061a2b 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Eyebrow */}
            <div
              className={`inline-block mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="text-sm font-medium text-brand-blue uppercase tracking-widest">
                Who We Are
              </span>
            </div>

            {/* Headline */}
            <h2
              className={`font-display text-4xl sm:text-5xl font-bold text-brand-dark mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Your Trusted
              <br />
              <span className="text-brand-blue">Travel Partner</span>
            </h2>

            {/* Description */}
            <p
              className={`text-lg text-gray-600 mb-8 leading-relaxed transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              BURAQ_TRAVELHUB is a reliable tour operator, ready to take on all the organizational 
              chores so that you can fully enjoy your adventures. We specialize in creating 
              unforgettable journeys across India&apos;s most beautiful destinations.
            </p>

            {/* Stats */}
            <div
              className={`grid grid-cols-3 gap-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              {[
                { value: '4+', label: 'Days Tour' },
                { value: '3', label: 'Destinations' },
                { value: '21', label: 'Seater Bus' },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="font-display text-3xl sm:text-4xl font-bold text-brand-blue">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`group relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                }`}
                style={{
                  transitionDelay: `${600 + index * 150}ms`,
                  transform: isVisible
                    ? 'perspective(1000px) rotateY(-3deg) rotateX(2deg)'
                    : 'perspective(1000px) rotateY(-30deg) rotateX(10deg) translateX(80px)',
                }}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center group-hover:bg-brand-blue group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-7 h-7 text-brand-blue group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-brand-dark mb-2 group-hover:text-brand-blue transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
