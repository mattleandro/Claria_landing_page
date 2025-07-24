// src/components/Hero/Hero.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Hero.module.css';
import logoClaria from '../../assets/logo_claria.png';
import clariaDestaque from '../../assets/claria_destaque_red.jpg';

function Hero({ id, scrollToSection }) {
  const { t } = useTranslation();

  return (
    <section id={id} className={styles['hero-section']}>
      <div className={styles['hero-content']}>
        {/* Adicionei uma div para envolver a descrição e o botão */}
        <div className={styles['hero-text-and-button']}>
          <p className={styles['hero-description']}>
            {t('heroDescription')}
          </p>
          <button
            onClick={() => scrollToSection('musica')}
            className={`${styles.btn} ${styles['primary-btn']}`}
          >
            {t('heroButton')}
          </button>
        </div>
        {/* A logo agora está em sua própria div para reordenação */}
        <div className={styles['hero-logo-wrapper']}>
          <img src={logoClaria} alt={t('heroLogoAlt')} />
        </div>
      </div>
      <div className={styles['hero-image']}>
        <img src={clariaDestaque} alt={t('heroImageAlt')} />
      </div>
    </section>
  );
}

export default Hero;