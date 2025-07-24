// src/components/Theater/Theater.js
import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import styles from './Theater.module.css';
import clariaTeatro from '../../assets/claria_teatro.jpg';

function Theater({ id }) {
  const { t } = useTranslation(); // Initialize the hook to access translations

  return (
    <section id={id} className={`container ${styles['music-section']}`}>
      <h3 className={styles['section-title']}>{t('theaterSectionTitle')}</h3> 
      <div className={styles['music-grid']}>
        <div className={styles['music-item']}>
          <p>
            {t('theaterParagraph1')} 
          </p>
          <p>
            {t('theaterParagraph2')} 
          </p>
        </div>
        <div className={styles['teatro-image']}>
          <img src={clariaTeatro} alt={t('theaterImageAlt')} /> 
        </div>
        <div className={styles['music-item']}>
          <p>
            {t('theaterParagraph3')} 
          </p>
          <p>
            {t('theaterParagraph4')} 
          </p>
        </div>
      </div>
    </section>
  );
}

export default Theater;