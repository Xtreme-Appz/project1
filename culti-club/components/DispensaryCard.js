import React from 'react';
import Link from 'next/link';
import styles from '../styles/DispensaryCard.module.css';

const DispensaryCard = ({ dispensary }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <img src={dispensary.logo} alt={dispensary.name} className={styles.logo} />
                <h2 className={styles.name}>{dispensary.name}</h2>
            </div>
            <div className={styles.cardBody}>
                <p className={styles.info}>Inventory: {dispensary.inventory}</p>
                <p className={styles.info}>Information: {dispensary.info}</p>
            </div>
            <div className={styles.cardFooter}>
                <Link href={`/dispensary/${dispensary.id}`}>
                    <a className={styles.link}>View More</a>
                </Link>
            </div>
        </div>
    );
};

export default DispensaryCard;