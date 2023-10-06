import styles from './Cardapio.module.scss'
import Logo from '../../assets/cardapio/logo.jpg'
import Buscador from './Buscador';
import React, { useState } from 'react';
import Filtros from './Filtros';

export default function Cardapio(){
  const [buscar, setBusca] = useState("");
    return (
        <main>
            <nav className={ styles.menu }>
            <img src={Logo} alt="Logo do Restaurante"/>
            {/*Cardapio da Melhor Confeitaria*/}
            </nav>
            <header className={ styles.header }>
                <div className= { styles.header__text }>
                  "A confeitaria que adoça sua vida!"
                </div>
            </header>
            <section className={styles.cardapio}>
              <h3 className={styles.cardapio__titulo} >cardapio</h3>
              <Buscador busca={buscar} setBusca={setBusca}/>
              <div className={styles.cardapio__filtros}>
                <Filtros/>
              </div>
            </section>
        </main>
    );
}
