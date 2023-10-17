import { useState } from 'react';
import { useRouter } from 'next/router';
import AdminDashboard from '../components/AdminDashboard';
import LoginForm from '../components/LoginForm';

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const handleLogin = (username, password) => {
    // Add logic to validate admin credentials
    // If valid, set isLoggedIn to true
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <div>
      {isLoggedIn ? (
        <AdminDashboard onLogout={handleLogout} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}