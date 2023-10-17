import React from 'react';
import { useRouter } from 'next/router';
import { getCultivatorById } from '../lib/cultivators';
import StrainCard from './StrainCard';

const CultivatorPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [cultivator, setCultivator] = React.useState(null);

  React.useEffect(() => {
    if (id) {
      getCultivatorById(id).then(setCultivator);
    }
  }, [id]);

  if (!cultivator) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-dark-green text-white rounded-lg p-4">
      <h1 className="text-2xl font-bold mb-4">{cultivator.name}</h1>
      <div className="grid grid-cols-3 gap-4">
        {cultivator.strains.map((strain) => (
          <StrainCard key={strain.id} strain={strain} />
        ))}
      </div>
    </div>
  );
};

export default CultivatorPage;