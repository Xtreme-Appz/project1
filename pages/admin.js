import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';
import Layout from '../components/Layout';
import AdPlaceholder from '../components/AdPlaceholder';
import { getAdvertisers, addAdvertiser, deleteAdvertiser } from '../lib/api';

export default function Admin() {
  const [session, loading] = useSession();
  const [advertisers, setAdvertisers] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) {
      router.push('/login');
    }
    if (session) {
      getAdvertisers().then(data => setAdvertisers(data));
    }
  }, [session, loading]);

  const handleAddAdvertiser = (advertiser) => {
    addAdvertiser(advertiser).then(data => setAdvertisers([...advertisers, data]));
  };

  const handleDeleteAdvertiser = (id) => {
    deleteAdvertiser(id).then(() => setAdvertisers(advertisers.filter(ad => ad.id !== id)));
  };

  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        <h3 className="text-xl text-center text-white mb-4">Admin Dashboard</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {advertisers.map(ad => (
            <AdPlaceholder key={ad.id} ad={ad} onDelete={handleDeleteAdvertiser} />
          ))}
        </div>
        <button className="mt-8 bg-green-700 text-white rounded px-4 py-2" onClick={handleAddAdvertiser}>
          Add Advertiser
        </button>
      </div>
    </Layout>
  );
}