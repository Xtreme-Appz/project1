import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { signIn } from '../lib/auth';

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      router.push('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="dark:bg-green-900 rounded-lg p-6">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="text-white">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg bg-gray-800 text-white w-full p-2 mt-1"
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="text-white">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-lg bg-gray-800 text-white w-full p-2 mt-1"
            required
          />
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <button type="submit" className="mt-4 bg-green-700 text-white rounded-lg px-4 py-2">Log in</button>
      </form>
    </div>
  );
};

export default LoginForm;