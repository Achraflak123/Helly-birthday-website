
import React from 'react';
import Hero from '@/components/Hero';
import CountdownTimer from '@/components/CountdownTimer';
import Gallery from '@/components/Gallery';
import Guestbook from '@/components/Guestbook';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Navbar />
      <Hero />
      <CountdownTimer />
      <Gallery />
      <Guestbook />
      <Footer />
    </div>
  );
};

export default Index;
