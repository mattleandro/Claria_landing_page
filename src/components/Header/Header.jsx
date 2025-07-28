// src/components/Header/Header.jsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';
import logoClaria from '../../assets/logo_claria.png';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

function Header({ activeSection, scrollToSection }) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = (id) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  const navItems = [
    { id: 'hero', labelKey: 'navHome' },
    { id: 'sobre', labelKey: 'navAbout' },
    { id: 'musica', labelKey: 'navMusic' },
    { id: 'teatro', labelKey: 'navTheater' },
    { id: 'contato', labelKey: 'navContact' },
  ];

  return (
    <header className={styles['main-header']}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logoClaria} alt="Logo Clariá" />
        </div>

        <button
          className={`${styles['hamburger-button']} ${isOpen ? styles.open : ''}`}
          onClick={toggleMenu}
          aria-label={t('toggleMenu')}
        >
          <span className={styles['hamburger-bar']}></span>
          <span className={styles['hamburger-bar']}></span>
          <span className={styles['hamburger-bar']}></span>
        </button>

        <nav className={`${styles['main-nav']} ${isOpen ? styles['main-nav--open'] : ''}`}>
          <ul className={styles['nav-list']}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`${styles['nav-list--item']} ${
                    (item.id === 'musica' && (activeSection === 'musica' || activeSection === 'philosophy')) ||
                    (item.id !== 'musica' && activeSection === item.id)
                      ? styles.active
                      : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick(item.id);
                  }}
                >
                  {t(item.labelKey)}
                </a>
              </li>
            ))}

            {/* SWITCHER PARA MOBILE: Renderizado como um item da lista */}
            {isMobile && (
              <li className={styles['language-switcher-mobile-item']}>
                <LanguageSwitcher />
              </li>
            )}
          </ul>

          {/* SWITCHER PARA DESKTOP: Renderizado fora da lista, mas dentro da nav */}
          {!isMobile && <LanguageSwitcher />}
        </nav>
      </div>
    </header>
  );
}

export default Header;