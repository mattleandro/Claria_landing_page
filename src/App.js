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
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher'; // Importe o novo componente

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Certifique-se de que 'main section[id]' está correto com a sua estrutura HTML
    // Se suas seções não estiverem dentro de um <main> elas não serão detectadas.
    const sections = document.querySelectorAll('section[id]');
    const headerOffset = 80; // Compensar o header fixo

    const handleScroll = () => {
      let current = '';
      const scrollY = window.scrollY;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - headerOffset && scrollY < sectionTop + sectionHeight - headerOffset) {
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
      // Calculando a posição para scrollar
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
      <LanguageSwitcher />
      <Footer />
    </>
  );
}

export default App;