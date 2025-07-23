// src/components/Music/Music.js
import React from 'react';
import styles from './Music.module.css';
import clariaViolao from '../../assets/claria_violao.jpg';

// Importe seu arquivo CSS global AINDA é importante para as variáveis CSS
// e para a classe 'container' e outros estilos globais que não são de módulo.
import '../../index.css'; // Mantenha isso para variáveis CSS e .container

function Music({ id }) {
  return (
    <section id={id} className={`container ${styles['music-section']}`}>
      <h3 className={styles['section-title']}>Jornada Musical</h3>
      <div className={styles['music-grid']}>
        <div className={styles['music-item']}>
          <p>
            Foi convidada para um teste na Rede Record e para Ellis, o Musical. Em 2024, cursou teatro
            musical no CEFTEM, de Reiner Tenente, participando como a personagem Jerusa, de ‘Gabriela, o
            Musical’, baseada na obra de Jorge Amado, com direção geral de João Fonseca e Nello Marrese,
            Direção musical de Tony Lucchesi, Coreografias de Bella Mac, Adaptação e versão de Vitor de
            Oliveira, músicas originais de João Fonseca e Tony Lucchesi, Coordenação geral de Reiner
            Tenente e Produção do Ceftem. A temporada de Gabriela, o Musical foi de 22/11 a 08/12/2024,
            no Teatro Dulcina, RJ. Além disso, passou por cursos livres na CAL. Em junho/julho de 2025
            atuou na direção de cena e trilha sonora ao vivo do espetáculo ‘O Gato de Botas’, com
            adaptação de Maria Clara Machado, no Tablado, RJ.
          </p>
        </div>
        <div className={styles['music-item']}>
          <p>
            Em 2023, fez vários shows, em casas como Espaço09, Galeria Café Rio, Sobrado da Cidade, Audio
            Rebel, Ginger Mamut, no Teatro Cândido Mendes, na Fábrica Bhering e no Centro da Música
            Carioca Artur da Távola.
          </p>
          <p>
            Em 2024, dedicou-se à composição e gravação de músicas autorais, que, no segundo semestre,
            poderão ser ouvidas em shows com novo repertório, e no seu primeiro álbum. Com produção de
            Luiz Lopez e mixagem/masterização de Diogo Macedo e Tuta Macedo, da Emestudio. Assessoria de
            imprensa e produção executiva de Paula Ramagem.
          </p>
        </div>
      </div>
      <div className={styles['highlight-music']}>
        <img src={clariaViolao} alt="Clariá em um show com microfone" />
        <div className={styles['highlight-text']}>
          <p>
            A força musical e ao mesmo tempo emocional de Clarissa Chaves chama a atenção de ouvintes de
            todos os estilos. Participou do concurso da 89 FM A Rádio Rock para abrir o Lollapalooza BR
            2024 e para cantar no Universo Spanta 2025. Em maio de 2025, retornou aos palcos como
            Clariá, em show de abertura do evento B + B no Shopping Cassino Atlântico, RJ, onde
            apresentou a recém-lançada música ‘21’.
          </p>
          {/* Agora, 'secondary-btn' terá todas as propriedades, incluindo a base */}
          <a
            href="https://open.spotify.com/intl-pt/album/7sNlDAVnqTf44AsqzYvGc0" // Lembre-se de substituir pelo link real
            target="_blank"
            rel="noopener noreferrer"
            className={styles['secondary-btn']} // Apenas a classe de módulo
          >
            Ouça '21' Agora
          </a>
        </div>
      </div>
    </section>
  );
}

export default Music;