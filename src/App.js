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
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  // 1. Adicionar estado para verificar se é mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992); // Defina seu breakpoint aqui

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const headerOffset = 80; // Compensar o header fixo

    const handleScroll = () => {
      let current = '';
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - headerOffset && scrollY < sectionTop + sectionHeight - headerOffset) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    // Adicionar listener para redimensionamento para atualizar isMobile
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992); // Mantenha o breakpoint consistente
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize); // Adiciona o listener de resize
    handleScroll(); // Chamar uma vez ao carregar para definir a seção inicial
    handleResize(); // Chamar uma vez ao carregar para definir o estado inicial do mobile

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize); // Remove o listener de resize
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
        behavior: 'smooth',
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
      <WhatsAppButton activeSection={activeSection} isMobile={isMobile} />
      <LanguageSwitcher />
      <Footer />
    </>
  );
}

export default App;