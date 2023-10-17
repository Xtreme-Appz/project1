import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SideNavigation = () => {
  const router = useRouter();

  return (
    <nav className="h-full w-64 fixed top-0 left-0 bg-dark-green text-white p-5">
      <div className="mb-10">
        <Link href="/">
          <a className={`block py-2.5 px-4 rounded transition duration-200 ${router.pathname === '/' ? 'bg-opacity-75' : ''}`}>
            Home
          </a>
        </Link>
        <Link href="/admin">
          <a className={`block py-2.5 px-4 rounded transition duration-200 ${router.pathname === '/admin' ? 'bg-opacity-75' : ''}`}>
            Admin
          </a>
        </Link>
        <Link href="/cultivatorDashboard">
          <a className={`block py-2.5 px-4 rounded transition duration-200 ${router.pathname === '/cultivatorDashboard' ? 'bg-opacity-75' : ''}`}>
            Cultivator Dashboard
          </a>
        </Link>
        <Link href="/dispensaryDashboard">
          <a className={`block py-2.5 px-4 rounded transition duration-200 ${router.pathname === '/dispensaryDashboard' ? 'bg-opacity-75' : ''}`}>
            Dispensary Dashboard
          </a>
        </Link>
      </div>
      <div>
        <input type="text" placeholder="Search..." className="w-full px-3 py-2 rounded text-black" />
      </div>
    </nav>
  );
};

export default SideNavigation;