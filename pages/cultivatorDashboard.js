import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';
import Layout from '../components/Layout';
import StrainForm from '../components/StrainForm';
import { createStrain } from '../lib/strains';

export default function CultivatorDashboard() {
  const [session, loading] = useSession();
  const router = useRouter();
  const [strainData, setStrainData] = useState({
    name: '',
    type: '',
    thcLevel: '',
    cbdLevel: '',
    betaCaryophyllene: '',
    betaMyrcene: '',
    limonene: '',
    effects: [],
    logo: '',
  });

  const handleChange = (e) => {
    setStrainData({ ...strainData, [e.target.name]: e.target.value });
  };

  const handleEffectsChange = (e) => {
    let newEffects = [...strainData.effects];
    if (e.target.checked) {
      newEffects.push(e.target.value);
    } else {
      newEffects = newEffects.filter(effect => effect !== e.target.value);
    }
    setStrainData({ ...strainData, effects: newEffects });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createStrain(strainData);
    if (response.status === 201) {
      router.push('/cultivator/[id]', `/cultivator/${session.user.id}`);
    }
  };

  return (
    <Layout title="Cultivator Dashboard">
      <h1>Welcome, {session?.user?.name}</h1>
      <StrainForm
        strainData={strainData}
        handleChange={handleChange}
        handleEffectsChange={handleEffectsChange}
        handleSubmit={handleSubmit}
      />
    </Layout>
  );
}