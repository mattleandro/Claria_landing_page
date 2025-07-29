import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';
import logoClaria from '../../assets/logo_claria.png';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

function Header({ activeSection, scrollToSection }) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showHeaderLogoTooltip, setShowHeaderLogoTooltip] = useState(true); // Estado para controlar o tooltip

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // O timer para o tooltip só é ativado se for mobile na carga inicial
    const timer = setTimeout(() => {
      setShowHeaderLogoTooltip(false);
    }, 2000); // Tooltip aparece por 2 segundos

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer); // Limpa o timer ao desmontar o componente
    };
  }, []); // Executa apenas uma vez ao montar o componente

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = (id) => {
    scrollToSection(id);
    setIsOpen(false); // Fecha o menu mobile ao clicar em um item
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
        {/* Adiciona as classes 'popup' e 'show-on-load-header' condicionalmente */}
        <div className={`${styles.logo} ${styles.popup} ${isMobile && showHeaderLogoTooltip ? styles['show-on-load-header'] : ''}`}>
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