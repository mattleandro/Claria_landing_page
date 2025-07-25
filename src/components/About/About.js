// src/components/About/About.js
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './About.module.css';
import clariaAbout1 from '../../assets/claria_about.jpg';
import clariaAbout2 from '../../assets/claria_about2.jpg';
import clariaAbout3 from '../../assets/claria_about3.jpg';

function About({ id }) {
  const { t } = useTranslation();

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

  const handleSearchClick = () => {
    window.open('https://www.google.com/search?q=Clarissa+Chaves', '_blank');
  };

  return (
    <section id={id} className={`container ${styles['about-section']}`}>
      {/* Título da seção, agora um filho direto de about-section */}
      <h3 className={styles['section-title']}>{t('aboutSectionTitle')}</h3>

      {/* Container flex para imagem e texto (para desktop) */}
      <div className={styles['about-content-wrapper']}>
        {/* IMAGEM */}
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
              alt={t('aboutImageAlt', { index: index + 1 })}
              className={`${styles['slideshow-image']} ${index === currentSlide ? styles['active-slide'] : ''} ${isPaused && index === currentSlide ? styles['hover-grow'] : ''}`}
            />
          ))}
        </div>

        {/* TEXTO */}
        <div className={styles['about-text']}>
          <p>
            <span className={styles['highlight-text']}>
              Clarissa Chaves
              <span
                className={styles['search-icon']}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSearchClick();
                }}
                title={t('searchClarissaChaves')}
              >
                🔍
              </span>
              {' '}
              {t('aboutHighlightTextSuffix')}
            </span>
          </p>
          <p>
            {t('aboutParagraph1')}
          </p>
          <p>
            {t('aboutParagraph2')}
          </p>
          <p>
            {t('aboutParagraph3')}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;