// src/components/Header/Header.js
import React, { useState, useEffect } from 'react'; // Importe useState e useEffect
import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';
import logoClaria from '../../assets/logo_claria.png';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'; // Importe LanguageSwitcher

function Header({ activeSection, scrollToSection }) {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar o menu hambúrguer
  const [isMobile, setIsMobile] = useState(false); // Estado para controlar se é mobile

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992); // Defina o breakpoint conforme seu CSS
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Chame na montagem inicial para definir o estado correto

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Função para mudar o idioma (mantida aqui caso precise de um switcher separado no futuro)
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Função para alternar o estado do menu hambúrguer
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Função para fechar o menu após clicar em um item (importante para mobile)
  const handleNavLinkClick = (id) => {
    scrollToSection(id);
    setIsOpen(false); // Fecha o menu ao clicar em um link
  };

  const navItems = [
    { id: 'hero', labelKey: 'navHome', type: 'link' },
    { id: 'sobre', labelKey: 'navAbout', type: 'link' },
    { id: 'musica', labelKey: 'navMusic', type: 'link' },
    { id: 'teatro', labelKey: 'navTheater', type: 'link' },
    { id: 'contato', labelKey: 'navContact', type: 'link' },
  ];

  return (
    <header className={styles['main-header']}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logoClaria} alt="Logo Clariá" />
        </div>

        {/* Botão do Hambúrguer */}
        <button
          className={`${styles['hamburger-button']} ${isOpen ? styles.open : ''}`}
          onClick={toggleMenu}
          aria-label={t('toggleMenu')} // Adicione acessibilidade
        >
          <span className={styles['hamburger-bar']}></span>
          <span className={styles['hamburger-bar']}></span>
          <span className={styles['hamburger-bar']}></span>
        </button>

        {/* Navegação Principal */}
        <nav className={`${styles['main-nav']} ${isOpen ? styles['main-nav--open'] : ''}`}>
          <ul className={styles['nav-list']}>
            {navItems.map((item) => (
              <li key={item.id}>
                {item.type === 'link' ? (
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
                      handleNavLinkClick(item.id); // Usar a nova função aqui
                    }}
                  >
                    {t(item.labelKey)}
                  </a>
                ) : (
                  item.content
                )}
              </li>
            ))}
            {/* Renderiza o LanguageSwitcher dentro da navegação no mobile */}
            {isMobile && (
              <li className={styles['language-switcher-mobile-item']}>
                <LanguageSwitcher inHeader={true} />
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;