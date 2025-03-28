import React, { useState, useEffect } from 'react';
import { serverTimestamp } from 'firebase/firestore';
import { MessageSquare, SendHorizonal, Heart } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";
import { db, collection, addDoc, onSnapshot, orderBy, query } from "@/firebase"; // Import serverTimestamp

const Guestbook = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [wishes, setWishes] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Added loading state
  const isMobile = useIsMobile();

  // Fetch wishes in descending order by timestamp
  useEffect(() => {
    const wishesCollection = collection(db, "wishes");
    const q = query(wishesCollection, orderBy("time", "desc"));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      console.log("Wishes updated:", snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))); // Log data when updated
      setWishes(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted", name, message); // Log form data

    if (name.trim() && message.trim()) {
        try {
            console.log("Attempting to add wish to Firestore");

            // Save the wish with server-side timestamp
            const docRef = await addDoc(collection(db, "wishes"), {
                name,
                message,
                time: serverTimestamp(),
            });

            console.log("Wish added to Firestore with ID:", docRef.id);  // Log the document ID after submission

            // Reset form after successful submission
            setName('');
            setMessage('');
        } catch (error) {
            // Log the error if something goes wrong
            console.error("Error adding wish: ", error);
        }
    } else {
        console.log("Form data is invalid");
    }
  };


  return (
    <section style={{ marginTop: "2rem", paddingTop: "3rem" }} id="guestbook" className="py-16 md:py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-pink-50"></div>
      
      {/* Parallax decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-element absolute top-20 left-20 w-64 h-64 rounded-full bg-pink-100 opacity-40 blur-3xl" data-speed="0.1"></div>
        <div className="parallax-element absolute -bottom-20 right-20 w-80 h-80 rounded-full bg-purple-100 opacity-30 blur-3xl" data-speed="0.15"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 parallax-element hidden md:block" data-speed="-0.2">
        <Heart className="h-6 w-6 text-pink-400 opacity-60" fill="#F9A8D4" />
      </div>
      <div className="absolute bottom-40 left-10 parallax-element hidden md:block" data-speed="0.2">
        <Heart className="h-8 w-8 text-purple-400 opacity-60" fill="#C4B5FD" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-800">Birthday Wishes</h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Leave a special message for Hala's 21st birthday
          </p>
        </div>
        
        <div style={{ marginTop: "1rem" }} className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          <div className="glass-effect p-6 sm:p-8 rounded-2xl shadow-xl border border-white/20">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 flex items-center">
              <span>Leave Your Message</span>
              <Heart className="h-5 w-5 ml-2 text-pink-500" fill="#EC4899" />
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition shadow-sm"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Your Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition h-24 sm:h-32 resize-none shadow-sm"
                  placeholder="Write your birthday wish here..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Birthday Wish"}
                <SendHorizonal className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
          
          <div style={{ marginTop: "3rem" }}>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 flex items-center">
              <span>All Birthday Wishes</span>
              <MessageSquare className="h-5 w-5 ml-2 text-purple-500" />
            </h3>
            <div className="space-y-3 sm:space-y-5 max-h-[400px] sm:max-h-[500px] overflow-y-auto pr-2 wishing-well">
              {wishes.length === 0 ? (
                <p className="text-gray-500">No wishes yet. Be the first to send one!</p>
              ) : (
                wishes.map((wish) => (
                  <div 
                    key={wish.id} 
                    className="glass-effect p-4 sm:p-5 rounded-xl shadow-md border border-white/20 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="font-bold text-purple-600">{wish.name}</div>
                    <p className="text-gray-700 my-2">{wish.message}</p>
                    <div className="text-xs text-gray-500 flex items-center">
                      <Heart className="h-3 w-3 mr-1 text-pink-400" fill="#F472B6" />
                      {wish.time ? (
                        new Date(wish.time.seconds * 1000).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })
                      ) : (
                        <span className="text-gray-500">Date not available</span>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
            <hr />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guestbook;
