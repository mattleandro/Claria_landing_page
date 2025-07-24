import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';
import logoClaria from '../../assets/logo_claria.png';

function Header({ activeSection, scrollToSection }) {
  const { t } = useTranslation(); // Não precisamos mais do i18n diretamente aqui

  const navItems = [
    { id: 'hero', labelKey: 'navHome', type: 'link' },
    { id: 'sobre', labelKey: 'navAbout', type: 'link' },
    { id: 'musica', labelKey: 'navMusic', type: 'link' },
    { id: 'teatro', labelKey: 'navTheater', type: 'link' },
    { id: 'contato', labelKey: 'navContact', type: 'link' },
    // Removemos o item 'language-switcher' daqui
  ];

  return (
    <header className={styles['main-header']}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logoClaria} alt={t('heroLogoAlt')} /> {/* Usando a tradução para o alt text */}
        </div>
        <nav className={styles['main-nav']}>
          <ul className={styles['nav-list']}>
            {navItems.map((item) => (
              <li key={item.id}>
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
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;