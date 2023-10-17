import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getDispensaryInventory } from '../lib/dispensaries';
import DispensaryCard from './DispensaryCard';

const DispensaryDashboard = () => {
  const router = useRouter();
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInventory = async () => {
      const data = await getDispensaryInventory(router.query.id);
      setInventory(data);
      setLoading(false);
    };

    fetchInventory();
  }, [router.query.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dark:bg-gray-800 dark:text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Dispensary Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {inventory.map((strain) => (
          <DispensaryCard key={strain.id} strain={strain} />
        ))}
      </div>
    </div>
  );
};

export default DispensaryDashboard;