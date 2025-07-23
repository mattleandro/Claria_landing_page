// src/components/Philosophy/Philosophy.js
import React from 'react';
import styles from './Philosophy.module.css'; // Importa o CSS Module
import clariaSentada from '../../assets/claria_sentada_vestido.jpg'; // Caminho para sua imagem

function Philosophy({ id }) {
  return (
    <section id={id} className={`container ${styles['philosophy-section']}`}>
      <h3 className={styles['section-title']}>A Mensagem por Trás da Música</h3> {/* */}
      <div className={styles['philosophy-content']}>
        <div className={styles['philosophy-text']}>
          <p>
            Meu objetivo com a música é que as pessoas se identifiquem de coração comigo. É fazer com que
            elas se sintam compreendidas e percebam que há pessoas que passam pelo mesmo que elas. Quero
            que minha música espalhe o amor em todas as suas formas. É o amor que faz morrer, o amor que
            explode, o amor que dá. O amor que machuca, o amor que aflora, o amor que nasce e o amor que
            morre. Meu trabalho é diferente, porque carrega cura. Eu coloco as minhas energias e
            vibrações em cada um que trabalha em cada pessoa de uma maneira e eu uso o elemento do
            arco-íris. Todo músico está associado a uma cor para expressar um sentimento, um estado de
            espírito. {/* */}
          </p>
          <blockquote className={styles.quote}>
            <p>
              “Meu canto é para todos que estejam dispostos a evoluir como pessoa, a se entenderem como
              seres humanos e respeitarem todas as formas de amor, abraçando todas as experiências que
              a vida dá.” {/* */}
            </p>
            <cite>- Clariá</cite> {/* */}
          </blockquote>
        </div>
        <div className={styles['philosophy-images']}>
          <img src={clariaSentada} alt="Clariá sentada em um vestido elegante" /> {/* */}
        </div>
      </div>
    </section>
  );
}

export default Philosophy;