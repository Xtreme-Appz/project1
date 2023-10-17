import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-dark-green text-white py-4 px-6 flex justify-between items-center">
      <Link href="/">
        <a>
          <Image src="/images/logo.png" alt="Culti-Club Logo" width={120} height={40} />
        </a>
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/login">
              <a className="text-white hover:text-gray-300">Login</a>
            </Link>
          </li>
          <li>
            <Link href="/signup">
              <a className="text-white hover:text-gray-300">Signup</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;