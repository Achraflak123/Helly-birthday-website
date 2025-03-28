import React, { useState } from "react";
import { X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Gallery = () => {
  // Images with captions
  const images = [
    { src: "/images/TenthImage.jpg", caption: "Hala Performing in the Theatre" },
    { src: "/images/FirstImage.jpg", caption: "Shooting Finished of the movie 'Terre des Anges'" },
    { src: "/images/SecondImage.jpg", caption: "Hala's 19th Birthday" },
    { src: "/images/ThirdImage.jpg", caption: "Hala Sharing Love in Casablanca" },
    { src: "/images/FourthImage.jpg", caption: "First Time For Hala in China" },
    { src: "/images/FifthImage.jpg", caption: "Hala's 20th Birthday On The Rooftop" },
    { src: "/images/SixthImage.jpg", caption: "Hala Awarded the First Place in 'Foreign Cultural Trade'" },
    { src: "/images/SeventhImage.jpg", caption: "Hala in Shanghai" },
    { src: "/images/EighthImage.jpg", caption: "Hala and Oussama in the Class" },
    { src: "/images/NinthImage.jpg", caption: "Hala During the 2025 New Year" },
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const isMobile = useIsMobile();

  const openModal = (index) => {
    setSelectedImage(images[index]); // Store the selected image object
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section style={{ marginTop: "3rem", paddingTop: "5rem" }} id="gallery" className="py-16 md:py-20 relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-element absolute -top-40 left-1/5 w-72 h-72 rounded-full bg-purple-100 opacity-50 blur-3xl" data-speed="0.1"></div>
        <div className="parallax-element absolute bottom-20 right-1/5 w-80 h-80 rounded-full bg-pink-100 opacity-40 blur-3xl" data-speed="0.15"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-800">Beautiful Memories</h2>
          <p style={{ marginBottom: "2rem" }} className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of the happy memories of Hala. The memories we've shared together are truly
            special and unforgettable. Every image has a story behind it that we'll cherish forever.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:scale-105 cursor-pointer bg-gray-100 aspect-square"
              onClick={() => openModal(index)}
            >
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50">
                <img src={image.src} alt={`Memory ${index + 1}`} className="object-cover w-full h-full" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <h3 style={{ color: "white" }} className="text-white font-medium truncate">{image.caption}</h3>
                  <p style={{ color: "white" }} className="text-white/80 text-sm">Click to view</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={closeModal}>
            <div className="relative max-w-4xl max-h-[90vh] w-full sm:w-auto bg-white rounded-lg overflow-hidden shadow-2xl transform transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage.src} alt="Selected memory" className="w-full h-auto max-h-[80vh] object-contain" />

              <button 
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/40 transition-colors"
                onClick={closeModal}
              >
                <X className="h-5 w-5" />
              </button>

              <div className="p-4 bg-white">
                <h3 style={{ color: "white" }} className="font-medium text-lg">{selectedImage.caption}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
