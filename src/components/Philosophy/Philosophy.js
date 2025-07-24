// src/components/Philosophy/Philosophy.js
import React from 'react';
import { useTranslation } from 'react-i18next'; 
import styles from './Philosophy.module.css';
import clariaSentada from '../../assets/claria_sentada_vestido.jpg';

function Philosophy({ id }) {
  const { t } = useTranslation(); 

  return (
    <section id={id} className={`container ${styles['philosophy-section']}`}>
      <h3 className={styles['section-title']}>{t('philosophySectionTitle')}</h3> 
      <div className={styles['philosophy-content']}>
        <div className={styles['philosophy-text']}>
          <p>
            {t('philosophyParagraph1')} 
          </p>
          <blockquote className={styles.quote}>
            <p>
              {t('philosophyQuote')} 
            </p>
            <cite>- {t('philosophyCite')}</cite> 
          </blockquote>
        </div>
        <div className={styles['philosophy-images']}>
          <img src={clariaSentada} alt={t('philosophyImageAlt')} /> 
        </div>
      </div>
    </section>
  );
}

export default Philosophy;