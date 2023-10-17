import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { signup } from '../lib/auth';
import Layout from '../components/Layout';
import SignupForm from '../components/SignupForm';

export default function Signup() {
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = async ({ name, email, password }) => {
    try {
      await signup({ name, email, password });
      router.push('/');
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <Layout>
      <SignupForm
        errorMsg={errorMsg}
        onSubmit={handleSubmit(onSubmit)}
        register={register}
        errors={errors}
      />
    </Layout>
  );
}