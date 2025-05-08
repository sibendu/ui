import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const Home = () => {
  const activeSection = useScrollSpy(['home', 'about', 'skills', 'portfolio', 'contact'], { offset: 100 });
  
  return (
    <>
      <Header activeSection={activeSection} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
