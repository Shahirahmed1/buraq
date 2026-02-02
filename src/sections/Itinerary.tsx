import { useEffect, useRef, useState } from 'react';
import { Clock, MapPin, Utensils, Camera, Moon, Sun, Waves, Mountain, PartyPopper } from 'lucide-react';

const itineraryData = [
  {
    day: 1,
    title: 'Pick up from Mangalore',
    location: 'Mangalore',
    icon: Sun,
    activities: [
      { time: '00:00 A.M', activity: 'Pick up from Mangalore', icon: MapPin },
    ],
    description: 'Your adventure begins as we pick you up from Mangalore to start an unforgettable journey.',
    image: '/mangalore.jpg',
  },
  {
    day: 2,
    title: 'Dandeli Adventure',
    location: 'Dandeli',
    icon: Waves,
    activities: [
      { time: '09:00 A.M', activity: 'Freshup at Dandeli', icon: Sun },
      { time: '09:30 A.M', activity: 'Breakfast', icon: Utensils },
      { time: '10:30 A.M', activity: 'Water Activities: Kayaking, Raft Boating, Water Zorbing, Swimming', icon: Waves },
      { time: '01:30 P.M', activity: 'Lunch', icon: Utensils },
      { time: '03:00 P.M', activity: 'Sightseeing at Belur: Board Games, Trekking, Resort Indoor Games, Rain Dance, Swimming Pool', icon: Mountain },
      { time: '07:00 P.M', activity: 'Campfire', icon: PartyPopper },
      { time: '08:30 P.M', activity: 'Dinner', icon: Utensils },
      { time: '09:30 P.M', activity: 'Stay at Resort', icon: Moon },
    ],
    description: 'Experience thrilling water sports and adventure activities in the heart of nature.',
    image: '/dandeli.jpg',
  },
  {
    day: 3,
    title: 'Old Goa Exploration',
    location: 'Old Goa',
    icon: Camera,
    activities: [
      { time: '08:00 A.M', activity: 'Breakfast', icon: Utensils },
      { time: '08:30 A.M', activity: 'Moving to Goa', icon: MapPin },
      { time: '02:00 P.M', activity: 'Lunch at Goa', icon: Utensils },
      { time: '03:00 P.M', activity: 'Sightseeing at Old Goa: Old Goa Church, Panjim Boat Cruise (Optional), Baga Beach', icon: Camera },
      { time: '08:00 P.M', activity: 'Dinner', icon: Utensils },
      { time: '08:30 P.M', activity: 'Sightseeing Continues: Night walk at Calangute Beach', icon: Moon },
      { time: '10:00 P.M', activity: 'Stay at Resort', icon: Moon },
    ],
    description: 'Explore the historic churches, vibrant beaches, and experience the magic of Goa.',
    image: '/old-goa-church.jpg',
  },
  {
    day: 4,
    title: 'Goa Beaches & Departure',
    location: 'Goa',
    icon: PartyPopper,
    activities: [
      { time: '08:30 A.M', activity: 'Breakfast', icon: Utensils },
      { time: '09:30 A.M', activity: 'Sightseeing at Goa: Chapora Fort, Vagathore Beach, Anjuna Beach', icon: Camera },
      { time: '01:30 P.M', activity: 'Lunch', icon: Utensils },
      { time: '02:00 P.M', activity: 'Sightseeing continues: Aguada Fort, Miramar Beach, Dona Paula, Colva Beach', icon: Camera },
      { time: '08:00 P.M', activity: 'Private Party', icon: PartyPopper },
      { time: '10:00 P.M', activity: 'Dinner', icon: Utensils },
      { time: '10:30 P.M', activity: 'Departure from Goa', icon: MapPin },
    ],
    description: 'Visit iconic forts and beaches, enjoy a private party, and depart with cherished memories.',
    image: '/chapora-fort.jpg',
  },
];

export default function Itinerary() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeDay, setActiveDay] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="itinerary"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-brand-gray overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block text-sm font-medium text-brand-blue uppercase tracking-widest mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Your Journey Awaits
          </span>
          <h2
            className={`font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            4 Days of
            <span className="text-brand-blue"> Adventure</span>
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            A carefully crafted itinerary to ensure you experience the best of every destination
          </p>
        </div>

        {/* Day Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          {itineraryData.map((day, index) => (
            <button
              key={day.day}
              onClick={() => setActiveDay(index)}
              className={`relative px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                activeDay === index
                  ? 'bg-brand-blue text-white shadow-glow'
                  : 'bg-white text-gray-600 hover:bg-brand-blue/10 hover:text-brand-blue'
              }`}
            >
              Day {day.day}
              {activeDay === index && (
                <span className="absolute inset-0 rounded-full bg-brand-blue animate-pulse-glow -z-10" />
              )}
            </button>
          ))}
        </div>

        {/* Day Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - Image */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={itineraryData[activeDay].image}
                alt={itineraryData[activeDay].title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
              
              {/* Day Badge */}
              <div className="absolute top-6 left-6">
                <div className="flex items-center gap-3 px-5 py-3 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center">
                    {(() => {
                      const IconComponent = itineraryData[activeDay].icon;
                      return <IconComponent className="w-6 h-6 text-white" />;
                    })()}
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Day {itineraryData[activeDay].day}</div>
                    <div className="font-display text-lg font-semibold text-brand-dark">{itineraryData[activeDay].location}</div>
                  </div>
                </div>
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-2">
                  {itineraryData[activeDay].title}
                </h3>
                <p className="text-white/80 text-sm">
                  {itineraryData[activeDay].description}
                </p>
              </div>
            </div>
          </div>

          {/* Right - Activities Timeline */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl">
              <h4 className="font-display text-xl font-semibold text-brand-dark mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-blue" />
                Schedule
              </h4>

              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {itineraryData[activeDay].activities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-brand-blue/5 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center group-hover:bg-brand-blue transition-colors">
                      {(() => {
                        const IconComponent = activity.icon;
                        return <IconComponent className="w-5 h-5 text-brand-blue group-hover:text-white transition-colors" />;
                      })()}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-brand-blue mb-1">{activity.time}</div>
                      <div className="text-gray-700 text-sm">{activity.activity}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Note */}
        <div
          className={`mt-8 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          <p className="text-sm text-gray-500">
            * Above mentioned time is approximate and may delay in case of traffic and other causes
          </p>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c8d7ff;
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #2d62ff;
        }
      `}</style>
    </section>
  );
}
