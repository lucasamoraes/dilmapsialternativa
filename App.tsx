import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import ConventionalTherapy from './components/ConventionalTherapy';
import Features from './components/Features';
import GroupTherapy from './components/GroupTherapy';
import PackagesSection from './components/PackagesSection';
import Testimonials from './components/Testimonials';
import BookingSection from './components/BookingSection';
import YoutubeSection from './components/YoutubeSection';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import SalesPage from './components/SalesPage';
import { Language } from './types';

function App() {
  const [lang, setLang] = useState<Language>('pt');
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Roteamento simples: Se a URL for /vendas, exibe a página de vendas
  if (currentPath === '/vendas' || currentPath === '/oferta') {
    return (
      <div className="min-h-screen bg-[#fdfbf7] text-gray-800 font-sans selection:bg-yellow-200">
        <SalesPage lang={lang} />
        <FloatingWhatsApp />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f0f7ff] text-gray-800 font-sans selection:bg-blue-200 selection:text-blue-900">
      <Navbar lang={lang} setLang={setLang} />
      
      <main>
        <Hero lang={lang} />
        <StorySection lang={lang} />
        <Features lang={lang} />
        <ConventionalTherapy lang={lang} />
        <YoutubeSection lang={lang} />
        <GroupTherapy lang={lang} />
        <PackagesSection lang={lang} />
        <Testimonials lang={lang} />
        <BookingSection lang={lang} />
      </main>

      <Footer lang={lang} />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;