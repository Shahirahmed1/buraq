import { useEffect, useState, useRef } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Destinations from './sections/Destinations';
import Itinerary from './sections/Itinerary';
import PackageDetails from './sections/PackageDetails';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={mainRef}
      className={`min-h-screen bg-brand-dark transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
    >
      <Navbar scrollY={scrollY} />
      <main>
        <Hero />
        <About />
        <Destinations />
        <Itinerary />
        <PackageDetails />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
