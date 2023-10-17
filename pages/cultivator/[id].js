import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CultivatorPage from '../../components/CultivatorPage';

const Cultivator = () => {
  const router = useRouter();
  const { id } = router.query;
  const [cultivator, setCultivator] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`/api/cultivators/${id}`)
        .then(response => {
          setCultivator(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [id]);

  return (
    <div className="dark:bg-dark-green">
      {cultivator ? <CultivatorPage cultivator={cultivator} /> : 'Loading...'}
    </div>
  );
};

export default Cultivator;