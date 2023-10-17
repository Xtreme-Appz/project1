import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import StrainCard from '../components/StrainCard';
import CultivatorCard from '../components/CultivatorCard';
import DispensaryCard from '../components/DispensaryCard';
import AdPlaceholder from '../components/AdPlaceholder';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [strains, setStrains] = useState([]);
  const [cultivators, setCultivators] = useState([]);
  const [dispensaries, setDispensaries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const strainRes = await axios.get('/api/strains');
      const cultivatorRes = await axios.get('/api/cultivators');
      const dispensaryRes = await axios.get('/api/dispensaries');
      setStrains(strainRes.data);
      setCultivators(cultivatorRes.data);
      setDispensaries(dispensaryRes.data);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Culti-Club</h1>
        <div className={styles.grid}>
          {strains.slice(0, 20).map((strain) => (
            <StrainCard key={strain.id} strain={strain} />
          ))}
        </div>
        <h2 className={styles.subtitle}>Sponsored Cultivators</h2>
        <div className={styles.grid}>
          {cultivators.map((cultivator) => (
            <CultivatorCard key={cultivator.id} cultivator={cultivator} />
          ))}
        </div>
        <h2 className={styles.subtitle}>Sponsored Dispensaries</h2>
        <div className={styles.grid}>
          {dispensaries.map((dispensary) => (
            <DispensaryCard key={dispensary.id} dispensary={dispensary} />
          ))}
        </div>
        <h2 className={styles.subtitle}>Advertisements</h2>
        <div className={styles.grid}>
          <AdPlaceholder />
          <AdPlaceholder />
        </div>
      </main>
    </div>
  );
}