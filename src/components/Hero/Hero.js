import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Hero.module.css';
import logoClaria from '../../assets/logo_claria.png';
import clariaDestaque from '../../assets/claria_destaque_red.jpg';

function Hero({ id, scrollToSection }) {
  const { t } = useTranslation();
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 2000); // tooltip aparece por 2 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id={id} className={styles['hero-section']}>
      <div className={styles['hero-content']}>
        <div className={`${styles['hero-logo-wrapper']} ${styles.popup} ${showTooltip ? styles['show-on-load'] : ''}`}>
          <a
            href="https://www.google.com/search?q=Clarissa+Chaves"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logoClaria} alt={t('heroLogoAlt')} />
          </a>
        </div>

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
      </div>

      <div className={styles['hero-image']}>
        <img src={clariaDestaque} alt={t('heroImageAlt')} />
      </div>
    </section>
  );
}

export default Hero;
