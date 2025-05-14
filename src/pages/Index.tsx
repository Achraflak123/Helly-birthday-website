import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import CountdownTimer from '@/components/CountdownTimer';
import Gallery from '@/components/Gallery';
import Guestbook from '@/components/Guestbook';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Initialize parallax effect for the entire page
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        const speed = element.getAttribute('data-speed') || '0.2';
        // Apply transform based on scroll position multiplied by the speed factor
        htmlElement.style.transform = `translateY(${scrollY * parseFloat(speed)}px)`;
      });
      
      // Implement scroll spy for navigation
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.nav-link');
      
      sections.forEach(section => {
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop - 100;
        const sectionHeight = htmlSection.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Add a class to the body when the page loads
    document.body.classList.add('page-loaded');
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen relative bg-background">
      {/* Floating Decorative Elements - Now with Tailwind animations */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {/* Basketball */}
        <img 
          src="/theme/basketball-icon.svg" 
          className="absolute w-[60px] opacity-80 top-[20%] left-[10%] animate-float parallax-element will-change-transform" 
          alt="Basketball"
          data-speed="0.05"
        />
        
        {/* Anime Sparkle */}
        <img 
          src="/theme/anime-sparkle.svg" 
          className="absolute w-[40px] opacity-80 top-[70%] right-[15%] animate-float-delay-1 parallax-element will-change-transform" 
          alt="Sparkle"
          data-speed="0.03"
        />
        
        {/* Curry Chibi */}
        <img 
          src="/theme/curry-chibi.svg" 
          className="absolute w-[50px] opacity-80 bottom-[10%] left-[50%] animate-float-delay-2 parallax-element will-change-transform" 
          alt="Chibi Curry"
          data-speed="0.07"
        />
      </div>
      
      {/* Enhanced background pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(#ff719a_1px,transparent_1px)] bg-[size:20px_20px] opacity-5 pointer-events-none"></div>
      
      <Navbar />
      <Hero />
      <CountdownTimer />
      <Gallery />
      <Guestbook />
      <Footer />
    </div>
  );
};

export default Index;