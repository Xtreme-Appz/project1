import React, { useState } from 'react';
import { useRouter } from 'next/router';
import LoginForm from '../components/LoginForm';
import styles from '../styles/Login.module.css';

const LoginPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (res.status === 200) {
      const { token } = await res.json();
      localStorage.setItem('culti-club-token', token);
      router.push('/');
    } else {
      setError('Invalid username or password. Try again!');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login to Culti-Club</h1>
      <LoginForm
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        handleLogin={handleLogin}
        error={error}
      />
    </div>
  );
};

export default LoginPage;