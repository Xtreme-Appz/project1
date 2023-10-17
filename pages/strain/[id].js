import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import StrainPage from '../../components/StrainPage';
import { getStrainById } from '../../lib/strains';

export default function Strain() {
  const router = useRouter();
  const { id } = router.query;
  const [strain, setStrain] = useState(null);

  useEffect(() => {
    if (id) {
      getStrainById(id).then(data => {
        setStrain(data);
      });
    }
  }, [id]);

  if (!strain) {
    return <div>Loading...</div>;
  }

  return <StrainPage strain={strain} />;
}