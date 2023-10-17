import React, { useState } from 'react';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, role }),
    });
    const data = await response.json();
    if (data.success) {
      // Redirect to login page or dashboard based on role
    } else {
      // Show error message
    }
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <label htmlFor="signup-username">Username</label>
      <input
        id="signup-username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="signup-password">Password</label>
      <input
        id="signup-password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <label htmlFor="signup-role">Role</label>
      <select
        id="signup-role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="">Select Role</option>
        <option value="admin">Admin</option>
        <option value="cultivator">Cultivator</option>
        <option value="dispensary">Dispensary</option>
      </select>

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;