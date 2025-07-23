// src/components/About/About.js
import React, { useState, useEffect, useRef } from 'react';
import styles from './About.module.css'; // Importa o CSS Module
import clariaAbout1 from '../../assets/claria_about.jpg'; // Caminho para sua imagem
import clariaAbout2 from '../../assets/claria_about2.jpg'; // Caminho para sua imagem
import clariaAbout3 from '../../assets/claria_about3.jpg'; // Caminho para sua imagem

function About({ id }) {
  const slideshowImages = [clariaAbout1, clariaAbout2, clariaAbout3]; //
  const [currentSlide, setCurrentSlide] = useState(0); //
  const [isPaused, setIsPaused] = useState(false);
  const slideshowIntervalRef = useRef(null); // Usar useRef para o ID do intervalo

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slideshowImages.length); //
  };

  useEffect(() => {
    if (!isPaused) {
      slideshowIntervalRef.current = setInterval(nextSlide, 3000); //
    } else {
      clearInterval(slideshowIntervalRef.current); //
    }

    // Limpa o intervalo ao desmontar o componente ou antes de um novo efeito
    return () => clearInterval(slideshowIntervalRef.current);
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true); //
  };

  const handleMouseLeave = () => {
    setIsPaused(false); //
  };

  const handleClick = () => {
    setIsPaused((prev) => !prev); // Alterna o estado de pausa
  };

  return (
    <section id={id} className={`container ${styles['about-section']}`}>
      <div
        className={styles['about-image']}
        onMouseEnter={handleMouseEnter} //
        onMouseLeave={handleMouseLeave} //
        onClick={handleClick} //
      >
        {slideshowImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Clariá - imagem ${index + 1}`}
            className={`${styles['slideshow-image']} ${index === currentSlide ? styles['active-slide'] : ''} ${isPaused && index === currentSlide ? styles['hover-grow'] : ''}`}
          />
        ))}
      </div>
      <div className={styles['about-text']}>
        <h3 className={styles['section-title']}>Uma Artista Multifacetada</h3> {/* */}
        <p>
          <span className={styles['highlight-text']}>Clarissa Chaves é carioca, cantora, compositora e atriz.</span> <br /> {/* */}
          Mas, desde muito cedo, entrou no mundo das artes, fazendo teatro e cantando, inclusive no Beco das Garrafas, em um projeto de Bossa/MPB. No repertório, MPB, pop e R&B, tendo como principais influências nomes como Gal Costa, Clara Nunes, Djavan, Elis, Marisa Monte, Rihanna, Beyoncé, Ariana Grande e Amy Winehouse, além de suas composições, que a colocam como a nova promessa da música brasileira. {/* */}
        </p>
        <p>
          Clarissa faz sua preparação vocal com a também cantora e compositora da MPB, Andréia Pedroso, criadora do 'Cheia de Bossa', Mestre em Educação Musical pela Escola de Música da UFRJ, Curadora do projeto Preparavoz - Oficina de Canto - realizada no Centro da Música Carioca Artur da Távola. {/* */}
        </p>
        <p>
          Sua fonoaudióloga é a Dra. Cristiane Magacho, precursora em dermatoglifia no Brasil. Além disso, sua carreira tem planejamento de Anita Carvalho (Music Rio Academy), Marina Mattoso (Agência Jangada) e Roberta Senna (Ovo Branding). {/* */}
        </p>
      </div>
    </section>
  );
}

export default About;