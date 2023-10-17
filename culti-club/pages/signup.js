import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Navbar from '../components/Navbar';
import SignupForm from '../components/SignupForm';
import '../styles/Signup.module.css';

export default function Signup() {
  const { register, handleSubmit, errors } = useForm();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/users/signup', data);
      if (response.data.success) {
        router.push('/login');
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <div className="container">
      <Navbar />
      <SignupForm register={register} errors={errors} onSubmit={handleSubmit(onSubmit)} />
      {errorMessage && <p role="alert">{errorMessage}</p>}
    </div>
  );
}