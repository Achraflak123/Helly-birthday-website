
import React from 'react';
import { Heart, ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative py-12 bg-gray-800 text-white overflow-hidden">
      {/* Parallax decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-element absolute top-0 left-1/4 w-64 h-64 rounded-full bg-birthday-pink opacity-5 blur-xl" data-speed="0.1"></div>
        <div className="parallax-element absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-birthday-purple opacity-5 blur-xl" data-speed="0.2"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex items-center justify-center mb-6">
          <span className="text-lg font-medium mr-2">Made with</span>
          <Heart className="h-6 w-6 text-birthday-pink animate-pulse" fill="#FF719A" />
          <span className="text-lg font-medium ml-2">for Hala</span>
        </div>
        
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          A special gift for Hala Sentissi's 21st birthday - March 28, 2025. 
          May your special day be filled with love, joy, and wonderful memories.
        </p>
        
        <div className="mt-8">
          <button 
            onClick={scrollToTop}
            className="inline-flex items-center justify-center py-3 px-6 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors group"
          >
            <ChevronUp className="h-5 w-5 mr-2 group-hover:-translate-y-1 transition-transform" />
            <span>Back to Top</span>
          </button>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-700 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} | Celebrating Hala's 21st Birthday</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
