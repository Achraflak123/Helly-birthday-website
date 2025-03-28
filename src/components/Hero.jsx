
import React, { useEffect } from 'react';
import { PartyPopper } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    // Simple confetti effect
    const createConfetti = () => {
      const confettiColors = ['#EC4899', '#F472B6', '#FBCFE8', '#9333EA', '#FFB6C1'];
      const container = document.getElementById('confetti-container');
      if (!container) return;
      
      for (let i = 0; i < 50; i++) {
        setTimeout(() => {
          const confetti = document.createElement('div');
          confetti.className = 'absolute w-2 h-6 opacity-80';
          confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
          confetti.style.left = `${Math.random() * 100}%`;
          confetti.style.top = '-20px';
          confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
          confetti.style.animation = `fall ${3 + Math.random() * 3}s linear forwards`;
          container.appendChild(confetti);
          
          setTimeout(() => confetti.remove(), 6000);
        }, i * 100);
      }
    };
    
    createConfetti();
    
    // Add keyframes for the falling animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fall {
        from { transform: translateY(0) rotate(0); }
        to { transform: translateY(100vh) rotate(720deg); }
      }
    `;
    document.head.appendChild(style);
    
    return () => document.head.removeChild(style);
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-20 min-h-screen flex items-center">
      <div id="confetti-container" className="absolute inset-0 overflow-hidden pointer-events-none"></div>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
          Happy 21st Birthday, Hala!
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10">
          March 28, 2025 marks the day our amazing friend turns 21! 
          This website is a collection of memories and wishes just for you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#countdown" 
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition-colors flex items-center justify-center"
          >
            <span>See the Countdown</span>
            <PartyPopper className="ml-2 h-5 w-5" />
          </a>
          <a 
            href="#guestbook" 
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full transition-colors"
          >
            Leave a Wish
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
