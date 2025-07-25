// src/components/Philosophy/Philosophy.js
import React, { useState, useEffect, useRef } from 'react'; // Importe useState, useEffect, e useRef
import { useTranslation } from 'react-i18next';
import styles from './Philosophy.module.css';
import clariaSentada from '../../assets/claria_sentada_vestido.jpg';

function Philosophy({ id }) {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false); // Novo estado para controlar a visibilidade
  const sectionRef = useRef(null); // Ref para o elemento da seção

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Se a seção estiver visível, defina isVisible como true
            observer.unobserve(entry.target); // Pare de observar depois que for visível
          }
        });
      },
      {
        threshold: 0.3, // A seção se torna visível quando 30% dela está na viewport
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef} // Atribua a ref à seção
      className={`container ${styles['philosophy-section']} ${
        isVisible ? styles.visible : '' // Adicione a classe 'visible' quando isVisible for true
      }`}
    >
      <h3 className={styles['section-title']}>{t('philosophySectionTitle')}</h3>
      <div className={styles['philosophy-content']}>
        <div className={styles['philosophy-text']}>
          <p className={styles['animated-text']}>
            {t('philosophyParagraph1')}
          </p>
          <blockquote className={`${styles.quote} ${styles['animated-text']}`}>
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