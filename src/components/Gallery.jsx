
import React, { useState } from 'react';
import { Image, X } from 'lucide-react';

const Gallery = () => {
  // Placeholder for images - in a real implementation, you'd use actual images
  const placeholderImages = Array(6).fill('/placeholder.svg');
  
  const [selectedImage, setSelectedImage] = useState(null);
  
  const openModal = (index) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-20 relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-element absolute -top-40 left-1/5 w-72 h-72 rounded-full bg-purple-100 opacity-50 blur-3xl" data-speed="0.1"></div>
        <div className="parallax-element absolute bottom-20 right-1/5 w-80 h-80 rounded-full bg-pink-100 opacity-40 blur-3xl" data-speed="0.15"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-pink-100 p-3 rounded-full mb-5">
            <Image className="h-8 w-8 text-pink-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Beautiful Memories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of our favorite moments with Hala over the years
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderImages.map((image, index) => (
            <div 
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:scale-105 cursor-pointer bg-gray-100 aspect-square"
              onClick={() => openModal(index)}
            >
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50">
                <Image className="h-16 w-16 text-gray-400 group-hover:text-pink-400 transition-colors duration-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <h3 className="text-white font-medium truncate">Memory with Hala</h3>
                  <p className="text-white/80 text-sm">Click to view</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div 
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl transform transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-center h-full p-6 bg-gradient-to-br from-pink-50 to-purple-50">
                <Image className="h-32 w-32 text-gray-400" />
              </div>
              <button 
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/40 transition-colors"
                onClick={closeModal}
              >
                <X className="h-5 w-5" />
              </button>
              <div className="p-4 bg-white">
                <h3 className="font-medium text-lg">Memory with Hala</h3>
                <p className="text-gray-600">This is where you can add details about this special memory with Hala.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
