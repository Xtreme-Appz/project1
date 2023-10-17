import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_STRAIN } from '../lib/strains';
import { GET_CULTIVATOR } from '../lib/cultivators';

const CultivatorDashboard = () => {
  const router = useRouter();
  const { register, handleSubmit, errors } = useForm();
  const [createStrain, { data }] = useMutation(CREATE_STRAIN);
  const [cultivator, setCultivator] = useState(null);

  useEffect(() => {
    const fetchCultivator = async () => {
      const response = await fetch(GET_CULTIVATOR);
      const data = await response.json();
      setCultivator(data);
    };
    fetchCultivator();
  }, []);

  const onSubmit = async (data) => {
    try {
      await createStrain({ variables: { ...data, cultivatorId: cultivator.id } });
      router.push('/cultivator/[id]', `/cultivator/${cultivator.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="dark:bg-dark-green">
      <h1 className="text-white">Cultivator Dashboard</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="name" ref={register({ required: true })} placeholder="Strain Name" />
        {errors.name && <span>This field is required</span>}
        <input name="thcLevel" ref={register({ required: true })} placeholder="THC Level" />
        {errors.thcLevel && <span>This field is required</span>}
        <input name="cbdLevel" ref={register({ required: true })} placeholder="CBD Level" />
        {errors.cbdLevel && <span>This field is required</span>}
        <input name="type" ref={register({ required: true })} placeholder="Type" />
        {errors.type && <span>This field is required</span>}
        <input name="effects" ref={register({ required: true })} placeholder="Effects" />
        {errors.effects && <span>This field is required</span>}
        <button type="submit" className="bg-black text-white rounded">Add Strain</button>
      </form>
    </div>
  );
};

export default CultivatorDashboard;