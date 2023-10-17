import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import StrainCard from '../components/StrainCard';
import styles from '../styles/CultivatorDashboard.module.css';

export default function CultivatorDashboard() {
  const router = useRouter();
  const [strains, setStrains] = useState([]);

  const addStrain = (strain) => {
    setStrains([...strains, strain]);
  };

  const handleAddStrain = () => {
    router.push('/addStrain');
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <h1 className={styles.title}>Cultivator Dashboard</h1>
      <button onClick={handleAddStrain} className={styles.addButton}>Add Strain</button>
      <div className={styles.strains}>
        {strains.map((strain, index) => (
          <StrainCard key={index} strain={strain} />
        ))}
      </div>
    </div>
  );
}