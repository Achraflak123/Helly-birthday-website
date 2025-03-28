
import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';

const Guestbook = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [wishes, setWishes] = useState([
    { name: 'Sarah', message: 'Happy birthday Hala! I hope your day is as special as you are!', time: new Date().toISOString() },
    { name: 'Mike', message: 'Wishing you a magical 21st birthday filled with wonderful surprises!', time: new Date().toISOString() }
  ]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && message.trim()) {
      setWishes([...wishes, { name, message, time: new Date().toISOString() }]);
      setName('');
      setMessage('');
    }
  };

  return (
    <section id="guestbook" className="py-20 bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <MessageSquare className="h-12 w-12 mx-auto text-purple-500 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Birthday Wishes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Leave a special message for Hala's 21st birthday
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Leave Your Wish</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition h-32 resize-none"
                  placeholder="Write your birthday wish here..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Birthday Wish
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Birthday Wishes</h3>
            <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
              {wishes.map((wish, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <div className="font-bold text-purple-600">{wish.name}</div>
                  <p className="text-gray-700 my-2">{wish.message}</p>
                  <div className="text-xs text-gray-500">
                    {new Date(wish.time).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guestbook;
