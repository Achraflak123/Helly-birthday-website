
import { Heart, PartyPopper } from "lucide-react";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    setMounted(true);
    
    // Create confetti effect
    const colors = ["#FF719A", "#FFE29F", "#9b87f5", "#FFA99F"];
    const confettiContainer = document.getElementById("confetti-container");
    
    if (confettiContainer) {
      for (let i = 0; i < 50; i++) {
        setTimeout(() => {
          const confetti = document.createElement("div");
          confetti.classList.add("confetti-piece");
          confetti.style.left = `${Math.random() * 100}%`;
          confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
          confetti.style.animationDuration = `${3 + Math.random() * 5}s`;
          confetti.style.animationDelay = `${Math.random() * 2}s`;
          confettiContainer.appendChild(confetti);
          
          // Clean up confetti after animation
          setTimeout(() => {
            confetti.remove();
          }, 8000);
        }, i * 100);
      }
    }
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Enhanced parallax background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-element absolute -top-20 -left-20 w-64 h-64 rounded-full bg-birthday-softPink opacity-30 blur-3xl" data-speed="-0.2"></div>
        <div className="parallax-element absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-birthday-softPurple opacity-20 blur-3xl" data-speed="0.3"></div>
        <div className="parallax-element absolute -bottom-20 left-1/4 w-72 h-72 rounded-full bg-birthday-cream opacity-25 blur-3xl" data-speed="0.15"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({length: isMobile ? 10 : 20}).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white opacity-20"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out alternate-reverse`
            }}
          ></div>
        ))}
      </div>
      
      <div id="confetti-container" className="absolute inset-0 pointer-events-none"></div>
      
      <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 relative z-10 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="parallax-element inline-block bg-birthday-softPink p-3 rounded-full mb-6 animate-float" data-speed="-0.1">
          <Heart className="h-8 w-8 text-birthday-pink" fill="#FF719A" />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-gray-800 relative">
          <span className="parallax-element" data-speed="0.05">Happy 21st Birthday,{" "}</span>
          <span className="parallax-element text-birthday-pink inline-block animate-wiggle" data-speed="0.1">Hala!</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 parallax-element" data-speed="0.08">
          Welcome to your special celebration website, created with love for your 21st birthday.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center parallax-element" data-speed="0.05">
          <a 
            href="#countdown" 
            className="birthday-button group"
          >
            <span className="flex items-center justify-center">
              <span>Countdown to the Big Day</span>
              <PartyPopper className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            </span>
          </a>
          
          <a 
            href="#gallery" 
            className="px-6 py-3 rounded-full border border-birthday-pink text-birthday-pink hover:bg-birthday-softPink transition-colors font-medium transform hover:-translate-y-1 hover:scale-105 duration-300"
          >
            View Memories
          </a>
        </div>
        
        {/* Enhanced decorative elements */}
        <div className="absolute top-10 left-10 w-16 h-16 parallax-element hidden md:block" data-speed="-0.4">
          <img src="/placeholder.svg" alt="Decorative" className="w-full h-full opacity-50 animate-pulse" />
        </div>
        <div className="absolute bottom-10 right-10 w-20 h-20 parallax-element hidden md:block" data-speed="-0.3">
          <img src="/placeholder.svg" alt="Decorative" className="w-full h-full opacity-50 animate-pulse" />
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 section-divider"></div>
    </section>
  );
};

export default Hero;
