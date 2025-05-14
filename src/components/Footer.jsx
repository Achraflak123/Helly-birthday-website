
import React from 'react';
import { Heart, ChevronUp, Star, Sparkles } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative py-16 bg-gray-800 text-white overflow-hidden">
      {/* Enhanced parallax decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-element absolute top-0 left-1/4 w-64 h-64 rounded-full bg-birthday-pink opacity-5 blur-xl" data-speed="0.1"></div>
        <div className="parallax-element absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-birthday-purple opacity-5 blur-xl" data-speed="0.2"></div>
        <div className="parallax-element absolute top-1/3 right-1/5 w-48 h-48 rounded-full bg-pink-400 opacity-5 blur-xl" data-speed="0.15"></div>
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 parallax-element" data-speed="-0.2">
        <Star className="h-5 w-5 text-pink-300 opacity-30" fill="#F9A8D4" />
      </div>
      <div className="absolute bottom-20 right-20 parallax-element" data-speed="-0.3">
        <Sparkles className="h-6 w-6 text-purple-300 opacity-30" />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex flex-col items-center mb-8">
          <div className="mb-6 w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center shadow-inner">
            <Heart className="h-8 w-8 text-birthday-pink animate-pulse" fill="#FF719A" />
          </div>
          
          <h3 className="text-2xl font-serif font-medium mb-3">Thanks for celebrating Helly's Birthday Together!</h3>
          <p style={{ marginTop: "1rem" }} className="text-gray-400 mb-8 max-w-md mx-auto">
            A special gift for Helly's 20th birthday - May 16th, 2025. 
            May your special day be filled with love, joy, and wonderful memories.
          </p>
        </div>
        
        <div className="mt-8">
          <button
            style={{ margin: "1em", paddingTop: "1rem", textAlign: "center", verticalAlign: "middle", paddingInline: "1.5rem" }}
            onClick={scrollToTop}
            className="inline-flex items-center justify-center py-3 px-6 rounded-full bg-gray-700 hover:bg-gray-600 transition-all duration-300 shadow-md hover:shadow-lg group"
          >
            <ChevronUp className="h-5 w-5 mr-2 group-hover:-translate-y-1 transition-transform duration-300" />
            <span>Back to Top</span>
          </button>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-700 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} | Celebrating Helly's 20th birthday</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
