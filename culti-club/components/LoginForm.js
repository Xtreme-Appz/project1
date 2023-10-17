import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add login logic here
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="login-username">Username</label>
        <input
          type="text"
          id="login-username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="login-password">Password</label>
        <input
          type="password"
          id="login-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;