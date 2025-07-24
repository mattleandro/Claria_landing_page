import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css';

import FlagBR from '../../assets/flag_br.svg';
import FlagUS from '../../assets/flag_us.svg';

// Recebe a prop 'inHeader'
function LanguageSwitcher({ inHeader }) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Função auxiliar para verificar se o idioma atual corresponde ao botão
  const isActive = (buttonLangCode) => {
    return i18n.language.startsWith(buttonLangCode);
  };

  return (
    // Adiciona uma classe condicional baseada na prop 'inHeader'
    <div className={`${styles['language-switcher']} ${inHeader ? styles['language-switcher--in-header'] : ''}`}>
      <button
        className={`${styles['language-button']} ${isActive('pt') ? styles.activeLang : ''}`}
        onClick={() => changeLanguage('pt')}
        aria-label={t('switchLanguageToPortuguese')}
      >
        <img src={FlagBR} alt={t('flagBrazilAlt')} className={styles.flagIcon} />
      </button>

      <button
        className={`${styles['language-button']} ${isActive('en') ? styles.activeLang : ''}`}
        onClick={() => changeLanguage('en')}
        aria-label={t('switchLanguageToEnglish')}
      >
        <img src={FlagUS} alt={t('flagUnitedStatesAlt')} className={styles.flagIcon} />
      </button>
    </div>
  );
}

export default LanguageSwitcher;