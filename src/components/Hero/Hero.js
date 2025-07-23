// src/components/Hero/Hero.js
import React from 'react';
import styles from './Hero.module.css'; // Importa o CSS Module
import logoClaria from '../../assets/logo_claria.png'; // Caminho para sua imagem
import clariaDestaque from '../../assets/claria_destaque_red.jpg'; // Caminho para sua imagem

function Hero({ id, scrollToSection }) {
  return (
    <section id={id} className={styles['hero-section']}>
      <div className={styles['hero-content']}>
        <div className={styles['hero-title']}>
          <img src={logoClaria} alt="Logo Clariá" /> {/* */}
        </div>
        <p className={styles['hero-description']}>
          Cantora, compositora e atriz brasileira, Clariá traz a força do pop e da MPB em uma fusão de liberdade, sofisticação e energia artística. Prepare-se para uma experiência musical inesquecível. {/* */}
        </p>
        <button
          onClick={() => scrollToSection('musica')}
          className={`${styles.btn} ${styles['primary-btn']}`}
        >
          Descubra Minha Música {/* */}
        </button>
      </div>
      <div className={styles['hero-image']}>
        <img src={clariaDestaque} alt="Clariá em destaque com efeitos de luz neon" /> {/* */}
      </div>
    </section>
  );
}

export default Hero;