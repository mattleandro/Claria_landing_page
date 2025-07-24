// src/components/About/About.js
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next'; // <-- Importe o hook useTranslation
import styles from './About.module.css'; // Importa o CSS Module
import clariaAbout1 from '../../assets/claria_about.jpg'; // Caminho para sua imagem
import clariaAbout2 from '../../assets/claria_about2.jpg'; // Caminho para sua imagem
import clariaAbout3 from '../../assets/claria_about3.jpg'; // Caminho para sua imagem

function About({ id }) {
  const { t } = useTranslation(); // <-- Inicialize o hook para acessar as traduções

  const slideshowImages = [clariaAbout1, clariaAbout2, clariaAbout3];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideshowIntervalRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slideshowImages.length);
  };

  useEffect(() => {
    if (!isPaused) {
      slideshowIntervalRef.current = setInterval(nextSlide, 3000);
    } else {
      clearInterval(slideshowIntervalRef.current);
    }

    return () => clearInterval(slideshowIntervalRef.current);
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleClick = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <section id={id} className={`container ${styles['about-section']}`}>
      <div
        className={styles['about-image']}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {slideshowImages.map((src, index) => (
          <img
            key={index}
            src={src}
            // Traduzindo o alt text da imagem
            alt={t('aboutImageAlt', { index: index + 1 })}
            className={`${styles['slideshow-image']} ${index === currentSlide ? styles['active-slide'] : ''} ${isPaused && index === currentSlide ? styles['hover-grow'] : ''}`}
          />
        ))}
      </div>
      <div className={styles['about-text']}>
        {/* Traduzindo o título da seção */}
        <h3 className={styles['section-title']}>{t('aboutSectionTitle')}</h3>
        <p>
          {/* Traduzindo o texto com destaque */}
          <span className={styles['highlight-text']}>{t('aboutHighlightText')}</span>
          {' '} {/* Adicionado espaço para separar o span do parágrafo */}
          {/* Traduzindo o primeiro parágrafo */}
          {t('aboutParagraph1')}
        </p>
        <p>
          {/* Traduzindo o segundo parágrafo */}
          {t('aboutParagraph2')}
        </p>
        <p>
          {/* Traduzindo o terceiro parágrafo */}
          {t('aboutParagraph3')}
        </p>
      </div>
    </section>
  );
}

export default About;