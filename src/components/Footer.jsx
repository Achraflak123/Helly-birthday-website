
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-4">
          <span className="text-lg font-medium mr-2">Made with</span>
          <Heart className="h-5 w-5 text-pink-500" fill="#EC4899" />
          <span className="text-lg font-medium ml-2">for Hala</span>
        </div>
        
        <p className="text-gray-400">
          A special gift for Hala Sentissi's 21st birthday - March 28, 2025
        </p>
        
        <div className="mt-6">
          <a 
            href="#home" 
            className="inline-block py-2 px-4 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
          >
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
