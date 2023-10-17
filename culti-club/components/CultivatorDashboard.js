import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StrainCard from './StrainCard';

const CultivatorDashboard = () => {
  const [strains, setStrains] = useState([]);

  useEffect(() => {
    const fetchStrains = async () => {
      const res = await axios.get('/api/strains');
      setStrains(res.data);
    };

    fetchStrains();
  }, []);

  const addStrain = async (strain) => {
    const res = await axios.post('/api/strains', strain);
    setStrains([...strains, res.data]);
  };

  return (
    <div style={{ background: 'rgba(0, 0, 0, 0.8)', color: '#4CAF50', borderRadius: '15px' }}>
      <h1>Cultivator Dashboard</h1>
      <button onClick={() => addStrain()}>Add Strain</button>
      <div id="cultivator-strains">
        {strains.map((strain) => (
          <StrainCard key={strain.id} strain={strain} />
        ))}
      </div>
    </div>
  );
};

export default CultivatorDashboard;