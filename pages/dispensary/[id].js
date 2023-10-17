import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DispensaryPage from '../../components/DispensaryPage';
import { getDispensary } from '../../lib/dispensaries';

const Dispensary = () => {
  const router = useRouter();
  const { id } = router.query;
  const [dispensary, setDispensary] = useState(null);

  useEffect(() => {
    if (id) {
      getDispensary(id).then(data => setDispensary(data));
    }
  }, [id]);

  if (!dispensary) {
    return <div>Loading...</div>;
  }

  return <DispensaryPage dispensary={dispensary} />;
};

export default Dispensary;