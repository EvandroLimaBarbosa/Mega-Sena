import styles from '../styles/Bolinha.module.css'

interface BolinhaProps {
  value: string;
  key: number;
}

export default function BolinhaSpan(props: BolinhaProps) {
  return <div key={props.key} className={styles.container}>{props.value}</div>;
}
