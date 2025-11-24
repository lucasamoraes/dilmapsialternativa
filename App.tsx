import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import GroupTherapy from './components/GroupTherapy';
import GeminiInsight from './components/GeminiInsight';
import Testimonials from './components/Testimonials';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-gray-800 font-sans selection:bg-yellow-200 selection:text-yellow-900">
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <GroupTherapy />
        {/* The AI feature adds the requested "impact" and technology layer */}
        <GeminiInsight />
        <Testimonials />
        <BookingSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;