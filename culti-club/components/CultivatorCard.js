import React from 'react';
import Link from 'next/link';
import styles from '../styles/CultivatorCard.module.css';

const CultivatorCard = ({ cultivator }) => {
    return (
        <div className={styles.card}>
            <img src={cultivator.logo} alt={cultivator.name} className={styles.logo} />
            <div className={styles.content}>
                <h2 className={styles.name}>{cultivator.name}</h2>
                <p className={styles.info}>{cultivator.info}</p>
                <div className={styles.strains}>
                    {cultivator.strains.map((strain, index) => (
                        <Link key={index} href={`/strain/${strain.id}`}>
                            <a className={styles.strain}>{strain.name}</a>
                        </Link>
                    ))}
                </div>
                <Link href={`/cultivator/${cultivator.id}`}>
                    <a className={styles.more}>More Info</a>
                </Link>
            </div>
        </div>
    );
};

export default CultivatorCard;