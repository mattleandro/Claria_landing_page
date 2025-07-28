// src/components/LanguageSwitcher/LanguageSwitcher.js
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

  const isActive = (buttonLangCode) => {
    return i18n.language.startsWith(buttonLangCode);
  };

  return (
    <div className={styles['language-switcher']}>
      {/* Agrupador para o botão do Brasil e seu texto */}
      <div className={styles.buttonWrapper}>
        <button
          className={`${styles['language-button']} ${isActive('pt') ? styles.activeLang : ''}`}
          onClick={() => changeLanguage('pt')}
          aria-label={t('switchLanguageToPortuguese')}
        >
          <img src={FlagBR} alt={t('flagBrazilAlt')} className={styles.flagIcon} />
        </button>
        <span className={`${styles.langLabel} ${isActive('pt') ? styles.activeLabel : ''}`}>
          pt-BR
        </span>
      </div>

      {/* Agrupador para o botão dos EUA e seu texto */}
      <div className={styles.buttonWrapper}>
        <button
          className={`${styles['language-button']} ${isActive('en') ? styles.activeLang : ''}`}
          onClick={() => changeLanguage('en')}
          aria-label={t('switchLanguageToEnglish')}
        >
          <img src={FlagUS} alt={t('flagUnitedStatesAlt')} className={styles.flagIcon} />
        </button>
        <span className={`${styles.langLabel} ${isActive('en') ? styles.activeLabel : ''}`}>
          en-US
        </span>
      </div>
    </div>
  );
}

export default LanguageSwitcher;