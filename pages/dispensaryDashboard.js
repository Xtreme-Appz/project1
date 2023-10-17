import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';
import DispensaryCard from '../components/DispensaryCard';
import { getDispensaryInventory } from '../lib/dispensaries';

export default function DispensaryDashboard() {
  const [session, loading] = useSession();
  const [inventory, setInventory] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) {
      router.push('/login');
    }
  }, [session, loading]);

  useEffect(() => {
    if (session) {
      getDispensaryInventory(session.user.email)
        .then(data => setInventory(data))
        .catch(err => console.error(err));
    }
  }, [session]);

  if (loading) return <div>Loading...</div>;
  if (!session) return null;

  return (
    <div className="dark:bg-dark-green min-h-screen">
      <h1 className="text-white text-3xl mb-4">Dispensary Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {inventory.map((item, index) => (
          <DispensaryCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}