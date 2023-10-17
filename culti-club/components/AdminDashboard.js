import React, { useState } from 'react';
import AdPlaceholder from './AdPlaceholder';

const AdminDashboard = () => {
  const [advertisers, setAdvertisers] = useState([]);

  const addAdvertiser = (advertiser) => {
    setAdvertisers([...advertisers, advertiser]);
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="advertisers-section">
        <h2>Advertisers</h2>
        {advertisers.map((advertiser, index) => (
          <AdPlaceholder key={index} advertiser={advertiser} />
        ))}
        <button onClick={addAdvertiser}>Add Advertiser</button>
      </div>
    </div>
  );
};

export default AdminDashboard;