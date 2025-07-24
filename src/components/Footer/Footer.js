// src/components/Footer/Footer.js
import React from 'react';
import { useTranslation } from 'react-i18next'; // Importe o hook useTranslation
import styles from './Footer.module.css';

function Footer() {
  const { t } = useTranslation(); // Inicialize o hook para acessar as traduções

  return (
    <footer className={styles['main-footer']}>
      <div className="container">
        <p>{t('footerRights')}</p> {/* Traduzindo o texto de direitos autorais */}
        <p>{t('footerDevelopedBy', { year: "2025", developer1: "Matheus Leandro", developer2: "Maria Carolina Bastos" })}</p> 
      </div>
    </footer>
  );
}

export default Footer;