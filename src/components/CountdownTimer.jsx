
import React, { useState, useEffect } from 'react';
import { CalendarDays, Star, Sparkles } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const birthdate = new Date('March 28, 2025 00:00:00').getTime();
    
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = birthdate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);
  
  const CountItem = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="glass-effect rounded-lg shadow-lg p-2 sm:p-4 w-16 sm:w-20 md:w-28 h-16 sm:h-20 md:h-28 flex items-center justify-center border border-white/20 transform hover:scale-105 transition-transform duration-300">
        <span className="text-xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">{value}</span>
      </div>
      <span className="mt-2 text-sm sm:text-base text-gray-700 font-medium">{label}</span>
    </div>
  );

  return (
    <section id="countdown" className="py-16 md:py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-purple-100"></div>
      
      {/* Parallax decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-element absolute top-10 left-1/4 w-64 h-64 rounded-full bg-purple-200 opacity-30 blur-xl" data-speed="0.1"></div>
        <div className="parallax-element absolute bottom-10 right-1/3 w-80 h-80 rounded-full bg-pink-200 opacity-30 blur-xl" data-speed="0.2"></div>
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-20 parallax-element hidden md:block" data-speed="-0.2">
        <Star className="h-6 w-6 text-pink-400 opacity-60" fill="#F9A8D4" />
      </div>
      <div className="absolute bottom-20 right-20 parallax-element hidden md:block" data-speed="0.1">
        <Sparkles className="h-8 w-8 text-purple-400 opacity-60" />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-8 md:mb-10 flex justify-center">
          <div className="bg-white/50 p-3 sm:p-4 rounded-full shadow-md">
            <CalendarDays className="h-8 w-8 sm:h-12 sm:w-12 text-pink-500" />
          </div>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-800">Countdown to the Big Day</h2>
        <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-12">
          The celebration begins on March 28, 2025
        </p>
        
        <div className="flex justify-center space-x-2 sm:space-x-4 md:space-x-8">
          <CountItem value={timeLeft.days} label="Days" />
          <CountItem value={timeLeft.hours} label="Hours" />
          <CountItem value={timeLeft.minutes} label="Minutes" />
          <CountItem value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
