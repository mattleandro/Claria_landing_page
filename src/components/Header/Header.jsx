// src/components/Header/Header.js
import React from 'react';
import { useTranslation } from 'react-i18next'; 
import styles from './Header.module.css'; 
import logoClaria from '../../assets/logo_claria.png'; 

function Header({ activeSection, scrollToSection }) {
  const { t, i18n } = useTranslation();

  // Função para mudar o idioma
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const navItems = [
    { id: 'hero', labelKey: 'navHome', type: 'link' },
    { id: 'sobre', labelKey: 'navAbout', type: 'link' },
    { id: 'musica', labelKey: 'navMusic', type: 'link' },
    { id: 'teatro', labelKey: 'navTheater', type: 'link' },
    { id: 'contato', labelKey: 'navContact', type: 'link' },
    {
      id: 'language-switcher', // Novo ID para o botão de idioma
      type: 'button', // Indica que é um botão, não um link
      content: ( // O conteúdo do item será os próprios botões
        <div className={styles['language-switcher']}>
          <button
            className={`${styles['language-button']} ${i18n.language === 'pt' ? styles.activeLang : ''}`}
            onClick={() => changeLanguage('pt')}
          >
            {t('translateToPortuguese')}
          </button>
          <button
            className={`${styles['language-button']} ${i18n.language === 'en' ? styles.activeLang : ''}`}
            onClick={() => changeLanguage('en')}
          >
            {t('translateToEnglish')}
          </button>
        </div>
      ),
    },
  ];

  return (
    <header className={styles['main-header']}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logoClaria} alt="Logo Clariá" />
        </div>
        <nav className={styles['main-nav']}>
          <ul className={styles['nav-list']}>
            {navItems.map((item) => (
              <li key={item.id}>
                {item.type === 'link' ? (
                  <a
                    href={`#${item.id}`}
                    className={`${styles['nav-list--item']} ${activeSection === item.id ? styles.active : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                  >
                    {t(item.labelKey)} {/* Usa a função t() para traduzir o label */}
                  </a>
                ) : (
                  // Se o tipo for 'button', renderiza o conteúdo diretamente
                  item.content
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;