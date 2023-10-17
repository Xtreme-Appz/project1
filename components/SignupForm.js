import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { signup } from '../lib/auth';

export default function SignupForm() {
  const router = useRouter();
  const [userData, setUserData] = useState({ username: '', password: '', role: '' });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await signup(userData);
    if (response.status === 200) {
      router.push('/');
    } else {
      alert(response.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">
        Username:
        <input type="text" id="username" name="username" value={userData.username} onChange={handleChange} required />
      </label>
      <label htmlFor="password">
        Password:
        <input type="password" id="password" name="password" value={userData.password} onChange={handleChange} required />
      </label>
      <label htmlFor="role">
        Role:
        <select id="role" name="role" value={userData.role} onChange={handleChange} required>
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="dispensary">Dispensary</option>
          <option value="cultivator">Cultivator</option>
        </select>
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}