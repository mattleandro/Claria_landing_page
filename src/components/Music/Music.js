// src/components/Music/Music.js
import React from 'react';
import { useTranslation } from 'react-i18next'; 
import styles from './Music.module.css';
import clariaViolao from '../../assets/claria_violao.jpg';


import '../../index.css'; 
function Music({ id }) {
  const { t } = useTranslation(); 

  return (
    <section id={id} className={`container ${styles['music-section']}`}>
      <h3 className={styles['section-title']}>{t('musicSectionTitle')}</h3> 
      <div className={styles['music-grid']}>
        <div className={styles['music-item']}>
          <p>
            {t('musicParagraph1')} 
          </p>
        </div>
        <div className={styles['music-item']}>
          <p>
            {t('musicParagraph2')} 
          </p>
          <p>
            {t('musicParagraph3')} 
          </p>
        </div>
      </div>
      <div className={styles['highlight-music']}>
        <img src={clariaViolao} alt={t('musicImageAlt')} /> 
        <div className={styles['highlight-text']}>
          <p>
            {t('musicHighlightText')} 
          </p>
          <a
            href="https://open.spotify.com/intl-pt/album/7sNlDAVnqTf44AsqzYvGc0" 
            target="_blank"
            rel="noopener noreferrer"
            className={styles['secondary-btn']}
          >
            {t('musicListenNowButton')} 
          </a>
        </div>
      </div>
    </section>
  );
}

export default Music;