import styles from '../styles/LogoMegaSena.module.css'
import Heart from './Heart';

export default function HeartGrid() {

  return (
    <div className={styles.body}>
      <div><Heart rotation={270} color="#fff" /></div>
      <div><Heart rotation={0} color="#77dd77" /></div>
      <div><Heart rotation={180} color="#77dd77" /></div>
      <div><Heart rotation={90} color="#fff" /></div>
    </div>
  );
};
