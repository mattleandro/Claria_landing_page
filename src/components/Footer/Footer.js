// src/components/Footer/Footer.js
import React from 'react';
import styles from './Footer.module.css'; // Importa o CSS Module

function Footer() {
  return (
    <footer className={styles['main-footer']}>
      <div className="container"> {/* O container é global, então não usa styles.container aqui */}
        <p>© 2025 Clariá. Todos os direitos reservados.</p> {/* */}
        <p>Desenvolvido por Matheus Leandro com apoio de Maria Carolina Bastos</p> {/* */}
      </div>
    </footer>
  );
}

export default Footer;