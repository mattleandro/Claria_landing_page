// src/components/Theater/Theater.js
import React from 'react';
import styles from './Theater.module.css'; // Importa o CSS Module
import clariaTeatro from '../../assets/claria_teatro.jpg'; // Caminho para sua imagem

function Theater({ id }) {
  return (
    <section id={id} className={`container ${styles['music-section']}`}> {/* Reutiliza a classe de fundo de music-section */}
      <h3 className={styles['section-title']}>Jornada no Teatro</h3> {/* */}
      <div className={styles['music-grid']}> {/* Reutiliza a classe de grid de music-section */}
        <div className={styles['music-item']}> {/* Reutiliza a classe de item de music-section */}
          <p>
            Clarissa Chaves fez parte do Musaciateatral de 2022 a 2023, onde
            atuou como assistente de direção musical e atriz na peça ‘O Nariz',
            de Gogol’ tendo se apresentado no Festival Nova Cena
            (Itajaí/SC), no Festival Nacional de Teatro de Duque de Caxias,
            na Arena Fernando Torres (Parque Madureira), na Sala Baden
            Powell e na Areninha Hermeto Pascoal (Bangu, RJ).
            Atuou na companhia também como assistente e dando aula pras
            crianças. {/* */}
          </p>
          <p>
            Fez parte da direção musical e foi responsável pelo visagismo da peça
            ‘Lenços e Ventos’, em 2023, no Teatro Solar Meninos de Luz, onde
            também atuou na peça ‘O renascer da esperança, uma história de luz’.
            De 2007 a 2011, estudou com Ana Luiza Folly. Em 2011, passou pelo
            Tablado. Em 2013, participou do curta-metragem ‘Sequestro na Rede
            Social’. Foi convidada para um teste na Rede Record e para Elis, o
            Musical. {/* */}
          </p>
        </div>
        <div className={styles['teatro-image']}>
          <img src={clariaTeatro} alt="Clariá em destaque com efeitos de luz neon" /> {/* */}
        </div>
        <div className={styles['music-item']}> {/* Reutiliza a classe de item de music-section */}
          <p>
            Em 2024, cursou teatro musical no CEFTEM, de Reiner Tenente,
            participando, como a personagem ‘Jerusa', de 'Gabriela, o Musical’,
            baseada na obra de Jorge Amado, com Direção geral de João Fonseca e
            Nello Marrese, Direcao musical de Tony Lucchesi, Coreografias de
            Bella Mac, Adaptação e versão de Vitor de Oliveira, músicas originais
            de João Fonseca e Tony Lucchesi, Coordenação geral de Reiner
            Tenente e Produção do Ceftem. {/* */}
          </p>
          <p>
            A temporada de Gabriela, o Musical foi
            de 22/11 a 08/12/2024, no Teatro Dulcina, RJ. Além disso, passou por
            cursos livres na CAL. Em junho/julho de 2025 atuou na direção de cena
            e trilha sonora ao vivo da esquete ‘O Gato de Botas’, com adaptação de
            Maria Clara Machado, no Tablado, RJ. {/* */}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Theater;