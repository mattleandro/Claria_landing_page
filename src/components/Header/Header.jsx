// src/components/Header/Header.js
import React from 'react';
import styles from './Header.module.css'; // Importa o CSS Module
import logoClaria from '../../assets/logo_claria.png'; // Caminho para sua imagem

function Header({ activeSection, scrollToSection }) {
  const navItems = [
    { id: 'hero', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'musica', label: 'Música' },
    { id: 'teatro', label: 'Teatro' },
    { id: 'contato', label: 'Contato' },
  ];

  return (
    <header className={styles['main-header']}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logoClaria} alt="Logo Clariá" /> {/* */}
        </div>
        <nav className={styles['main-nav']}>
          <ul className={styles['nav-list']}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`${styles['nav-list--item']} ${activeSection === item.id ? styles.active : ''}`}
                  onClick={(e) => {
                    e.preventDefault(); // Previne o comportamento padrão da âncora
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
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