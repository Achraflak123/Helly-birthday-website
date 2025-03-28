
import React, { useState, useEffect } from 'react';
import { CalendarDays } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
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
      <div className="bg-white rounded-lg shadow-lg p-4 w-20 md:w-28 h-20 md:h-28 flex items-center justify-center">
        <span className="text-3xl md:text-5xl font-bold text-pink-500">{value}</span>
      </div>
      <span className="mt-2 text-gray-600 font-medium">{label}</span>
    </div>
  );

  return (
    <section id="countdown" className="py-20 bg-gradient-to-r from-pink-100 to-purple-100">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-10 flex justify-center">
          <CalendarDays className="h-12 w-12 text-pink-500" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Countdown to the Big Day</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
          The celebration begins on March 28, 2025
        </p>
        
        <div className="flex justify-center space-x-4 md:space-x-8">
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
