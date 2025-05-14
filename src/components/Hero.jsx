import { Heart, PartyPopper } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-pink-50 to-amber-50">
      {/* Main Content Card */}
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 max-w-2xl w-full shadow-lg border border-pink-100">
        {/* Decorative Icons */}
        <div className="flex justify-center gap-4 mb-6">
          <Heart className="h-10 w-10 text-pink-500 fill-pink-100" />
          <PartyPopper className="h-10 w-10 text-amber-500" />
          <Heart className="h-10 w-10 text-pink-500 fill-pink-100" />
        </div>
      
        {/* Birthday Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800">
          Happy 20th Birthday, <span className="text-pink-500">Helly!</span>
        </h1>

        {/* Personal Message */}
        <div className="bg-white p-6 mb-8 rounded-lg border border-pink-200">
          <p className="text-lg text-center text-gray-700">
            To our amazing , cute , funny and weird ahh Helly ,  may your day be filled with joy and laughter and me! 🏀✨
          </p>
        </div>

        {/* Celebration Emojis */}
        <div className="text-3xl text-center mb-8 animate-bounce">
          🎂 🎈 🎁
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center justify-center">
            <PartyPopper className="mr-2 h-5 w-5" />
            Celebrate
          </button>
          <button className="border border-pink-500 text-pink-500 hover:bg-pink-50 px-6 py-3 rounded-full font-medium transition-colors">
            View Memories
          </button>
        </div>
      </div>

      {/* Floating Emojis (Simple Version) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {['🎉', '🏀', '✨'].map((emoji, i) => (
          <div 
            key={i}
            className="absolute text-3xl opacity-70 animate-float"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          >
            {emoji}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;