import { useState, useEffect } from 'react';
import axios from 'axios';
import DispensaryCard from '../components/DispensaryCard';
import styles from '../styles/DispensaryDashboard.module.css';

const DispensaryDashboard = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const fetchInventory = async () => {
      const res = await axios.get('/api/dispensaries/inventory');
      setInventory(res.data);
    };

    fetchInventory();
  }, []);

  const addInventory = async (strain) => {
    const res = await axios.post('/api/dispensaries/inventory', { strain });
    setInventory([...inventory, res.data]);
  };

  return (
    <div className={styles.dispensaryDashboard}>
      <h1>Dispensary Dashboard</h1>
      <button onClick={() => addInventory()}>Add Strain to Inventory</button>
      <div className={styles.inventory}>
        {inventory.map((strain) => (
          <DispensaryCard key={strain.id} strain={strain} />
        ))}
      </div>
    </div>
  );
};

export default DispensaryDashboard;