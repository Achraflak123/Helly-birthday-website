
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
      
      parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed') || 0.2;
        // Apply transform based on scroll position multiplied by the speed factor
        element.style.transform = `translateY(${scrollY * parseFloat(speed)}px)`;
      });
      
      // Implement scroll spy for navigation
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.nav-link');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
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
    <div className="min-h-screen relative">
      {/* Floating decorative elements */}
      <div className="fixed top-20 left-5 w-12 h-12 z-0 opacity-30 parallax-slow">
        <img src="/placeholder.svg" alt="Decoration" className="w-full h-full" />
      </div>
      <div className="fixed top-40 right-10 w-16 h-16 z-0 opacity-20 parallax-medium">
        <img src="/placeholder.svg" alt="Decoration" className="w-full h-full" />
      </div>
      <div className="fixed bottom-32 left-10 w-14 h-14 z-0 opacity-25 parallax-fast">
        <img src="/placeholder.svg" alt="Decoration" className="w-full h-full" />
      </div>
      
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
