import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { loginUser } from '../lib/auth';
import LoginForm from '../components/LoginForm';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await loginUser(data);
      router.push('/');
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto h-12 w-auto" src="/images/logo.png" alt="Culti-Club" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Sign in to your account
          </h2>
        </div>
        <LoginForm 
          register={register} 
          handleSubmit={handleSubmit} 
          onSubmit={onSubmit} 
          errors={errors} 
          loading={loading} 
          error={error} 
        />
      </div>
    </div>
  );
}