import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DispensaryCard from './DispensaryCard';

const DispensaryPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [dispensary, setDispensary] = useState(null);

  useEffect(() => {
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
    <div className="dark:bg-dark-green">
      <h1 className="text-white text-3xl mb-4">Dispensary Details</h1>
      <DispensaryCard dispensary={dispensary} />
    </div>
  );
};

export default DispensaryPage;