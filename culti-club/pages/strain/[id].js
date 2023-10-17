import { useRouter } from 'next/router';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import StrainPage from '../../components/StrainPage';
import { useEffect, useState } from 'react';

const Strain = () => {
  const router = useRouter();
  const { id } = router.query;
  const [strain, setStrain] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`/api/strains/${id}`)
        .then(response => {
          setStrain(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [id]);

  return (
    <div>
      <Navbar />
      {strain && <StrainPage strain={strain} />}
    </div>
  );
};

export default Strain;