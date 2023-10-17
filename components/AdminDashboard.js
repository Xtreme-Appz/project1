import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AdPlaceholder } from './AdPlaceholder';
import { useAuth } from '../lib/auth';

const AdminDashboard = () => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [advertisers, setAdvertisers] = useState([]);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
    if (user && user.role !== 'admin') {
      router.push('/');
    }
  }, [user, loading]);

  useEffect(() => {
    // Fetch advertisers from API and set state
    // This is a placeholder and should be replaced with actual API call
    setAdvertisers([
      { id: 1, name: 'Advertiser 1' },
      { id: 2, name: 'Advertiser 2' },
      { id: 3, name: 'Advertiser 3' },
    ]);
  }, []);

  const handleAddAdvertiser = () => {
    // Add advertiser logic here
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <button onClick={handleAddAdvertiser}>Add Advertiser</button>
      <div className="advertisers">
        {advertisers.map((advertiser) => (
          <AdPlaceholder key={advertiser.id} advertiser={advertiser} />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;