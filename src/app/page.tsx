"use client";

import { useState } from "react";
import '../styles/globals.css'
import BolinhaSpan from "../components/BolinhaSpan";
import styles from '../styles/MegaSena.module.css'
import LogoMegaSena from "../components/LogoMegaSena";

export default function MegaSena() {
  const [arrayAleatorio, setArrayAleatorio] = useState<number[]>([]);
  const [quantidadeNumeros, setQuantidadeNumeros] = useState<number>(6);

  const gerarArrayAleatorio = () => {
    const min = 1;
    const max = 60;

    const numeros = Array.from({ length: max - min + 1 }, (_, i) => i + min);

    for (let i = numeros.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
    }

    const novoArrayAleatorio = numeros.slice(0, quantidadeNumeros);
    novoArrayAleatorio.sort((a, b) => a - b);

    setArrayAleatorio(novoArrayAleatorio);
  };

  console.log(arrayAleatorio)

  return (
    <div className={styles.body}>
      <LogoMegaSena />
      <h1 className={styles.header}>Gerador de numeros<br/> MEGA-SENA </h1>
      <div className={styles.alignBalls}>
        {arrayAleatorio.map((numero, index) => (
          <BolinhaSpan key={index} value={numero.toString()} />
        ))}
      </div>
      <div className={styles.content}>
        <input className={styles.inputMegaSena}
          placeholder="Quantidade de números"
          type="text"
          onChange={(e) => {
            setQuantidadeNumeros(parseInt(e.target.value));
          }}
        />

        <button className={styles.buttonMegaSena} type="button" onClick={gerarArrayAleatorio}>Gerar</button>
      </div>
    </div>
  );
}
