import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import DispensaryCard from './DispensaryCard';
import styles from '../styles/DispensaryPage.module.css';

const DispensaryPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [dispensary, setDispensary] = React.useState(null);

  React.useEffect(() => {
    if (id) {
      axios.get(`/api/dispensaries/${id}`)
        .then(response => {
          setDispensary(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [id]);

  if (!dispensary) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{dispensary.name}</h1>
      <DispensaryCard dispensary={dispensary} />
      <div className={styles.inventory}>
        <h2>Inventory</h2>
        {dispensary.inventory.map((strain, index) => (
          <div key={index} className={styles.strain}>
            <img src={strain.logo} alt={strain.name} className={styles.logo} />
            <div className={styles.details}>
              <h3>{strain.name}</h3>
              <p>Type: {strain.type}</p>
              <p>THC: {strain.thc}</p>
              <p>CBD: {strain.cbd}</p>
              <p>Beta Caryophyllene: {strain.betaCaryophyllene}</p>
              <p>Beta Myrcene: {strain.betaMyrcene}</p>
              <p>Limonene: {strain.limonene}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DispensaryPage;