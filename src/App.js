// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Music from './components/Music/Music';
import Philosophy from './components/Philosophy/Philosophy';
import Theater from './components/Theater/Theater';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]');
    const headerOffset = 80; // Compensar o header fixo

    const handleScroll = () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - headerOffset && window.scrollY < sectionTop + sectionHeight - headerOffset) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Chamar uma vez ao carregar para definir a seção inicial

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const targetSection = document.getElementById(id);
    if (targetSection) {
      const headerOffset = 80; // Compensar o header fixo
      const elementPosition = targetSection.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <main>
        <Hero id="hero" scrollToSection={scrollToSection} />
        <About id="sobre" />
        <Music id="musica" />
        <Philosophy id="filosofia" />
        <Theater id="teatro" />
        <Contact id="contato" />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;