import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import StrainCard from './StrainCard';

const CultivatorPage = () => {
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

  if (!cultivator) {
    return <div>Loading...</div>;
  }

  return (
    <div className="cultivator-info">
      <h1>{cultivator.name}</h1>
      <h2>Strains</h2>
      <div className="strain-list">
        {cultivator.strains.map(strain => (
          <StrainCard key={strain.id} strain={strain} />
        ))}
      </div>
    </div>
  );
};

export default CultivatorPage;