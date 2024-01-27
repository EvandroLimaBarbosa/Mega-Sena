import styles from '../styles/Heart.module.css'
import React from 'react';

type HeartProps = {
  color: string;
  rotation: number;
};

export default function Heart({ color, rotation }: HeartProps) {
  const heartStyle = {
    '--color': color,
    transform: `rotate(${rotation}deg)`,
    transformOrigin: '50% 50%',
  };

  return <div className={styles.div}>
    <div className={styles.heart} style={heartStyle} />
  </div>;
};
