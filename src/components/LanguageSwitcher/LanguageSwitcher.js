import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css';

import FlagBR from '../../assets/flag_br.svg';
import FlagUS from '../../assets/flag_us.svg';

function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Função auxiliar para verificar se o idioma atual corresponde ao botão
  const isActive = (buttonLangCode) => {
    // i18n.language pode ser 'pt-BR', 'en-US', etc.
    // Verificamos se começa com 'pt' ou 'en'
    return i18n.language.startsWith(buttonLangCode);
  };

  return (
    <div className={styles['language-switcher']}>
      <button
        className={`${styles['language-button']} ${isActive('pt') ? styles.activeLang : ''}`}
        onClick={() => changeLanguage('pt')}
        aria-label={t('switchLanguageToPortuguese')}
      >
        <img src={FlagBR} alt={t('flagBrazilAlt')} className={styles.flagIcon} />
        <span className={styles.langText}>{t('PT-BR')}</span>
      </button>

      <button
        className={`${styles['language-button']} ${isActive('en') ? styles.activeLang : ''}`}
        onClick={() => changeLanguage('en')}
        aria-label={t('switchLanguageToEnglish')}
      >
        <img src={FlagUS} alt={t('flagUnitedStatesAlt')} className={styles.flagIcon} />
        <span className={styles.langText}>{t('EN-US')}</span>
      </button>
    </div>
  );
}

export default LanguageSwitcher;