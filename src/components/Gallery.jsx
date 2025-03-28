
import React, { useState } from 'react';
import { Image } from 'lucide-react';

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
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Beautiful Memories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of our favorite moments with Hala over the years
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderImages.map((image, index) => (
            <div 
              key={index}
              className="rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105 cursor-pointer bg-gray-100 aspect-square"
              onClick={() => openModal(index)}
            >
              <div className="w-full h-full flex items-center justify-center">
                <Image className="h-12 w-12 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
        
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div 
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-center h-full p-4">
                <Image className="h-32 w-32 text-gray-400" />
              </div>
              <button 
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/40 transition-colors"
                onClick={closeModal}
              >
                ✕
              </button>
              <div className="p-4 bg-white">
                <p className="font-medium">Memory with Hala</p>
                <p className="text-gray-600 text-sm">Add photo caption here</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
