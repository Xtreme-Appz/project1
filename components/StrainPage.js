import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getStrainById } from '../lib/strains';
import { getCultivatorById } from '../lib/cultivators';
import styles from '../styles/StrainPage.module.css';

export default function StrainPage() {
  const router = useRouter();
  const { id } = router.query;
  const [strain, setStrain] = useState(null);
  const [cultivator, setCultivator] = useState(null);

  useEffect(() => {
    if (id) {
      getStrainById(id).then(data => {
        setStrain(data);
        getCultivatorById(data.cultivatorId).then(cultivatorData => {
          setCultivator(cultivatorData);
        });
      });
    }
  }, [id]);

  if (!strain || !cultivator) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <img src={strain.logo} alt={strain.name} className={styles.logo} />
      <h1 className={styles.name}>{strain.name}</h1>
      <p className={styles.type}>{strain.type}</p>
      <p className={styles.thc}>THC: {strain.thcLevel}%</p>
      <p className={styles.cbd}>CBD: {strain.cbdLevel}%</p>
      <p className={styles.betaCaryophyllene}>Beta Caryophyllene: {strain.betaCaryophyllene} mg/g</p>
      <p className={styles.betaMyrcene}>Beta Myrcene: {strain.betaMyrcene} mg/g</p>
      <p className={styles.limonene}>Limonene: {strain.limonene} mg/g</p>
      <p className={styles.effects}>Effects: {strain.effects.join(', ')}</p>
      <h2 className={styles.cultivatorTitle}>Cultivated by:</h2>
      <a href={`/cultivator/${cultivator.id}`} className={styles.cultivatorLink}>{cultivator.name}</a>
    </div>
  );
}