import React from 'react';
import Link from 'next/link';
import styles from '../styles/StrainCard.module.css';

const StrainCard = ({ strain }) => {
  return (
    <div className={styles.card}>
      <img src={strain.logo} alt={strain.name} className={styles.logo} />
      <div className={styles.info}>
        <Link href={`/strain/${strain.id}`}>
          <a className={styles.name}>{strain.name}</a>
        </Link>
        <p className={styles.level}>THC: {strain.thcLevel}%</p>
        <p className={styles.level}>CBD: {strain.cbdLevel}%</p>
        <p className={styles.level}>Beta Caryophyllene: {strain.betaCaryophyllene} mg/g</p>
        <p className={styles.level}>Beta Myrcene: {strain.betaMyrcene} mg/g</p>
        <p className={styles.level}>Limonene: {strain.limonene} mg/g</p>
        <p className={styles.type}>Type: {strain.type}</p>
        <p className={styles.effects}>Effects: {strain.effects.join(', ')}</p>
      </div>
    </div>
  );
};

export default StrainCard;