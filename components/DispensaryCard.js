import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const DispensaryCard = ({ dispensary }) => {
  return (
    <div className="bg-dark-green rounded-lg p-4 opacity-75">
      <div className="flex items-center">
        <Image src={dispensary.logo} alt={dispensary.name} width={50} height={50} />
        <h2 className="text-white ml-4">{dispensary.name}</h2>
      </div>
      <p className="text-white mt-2">Location: {dispensary.location}</p>
      <p className="text-white">Inventory: {dispensary.inventory}</p>
      <Link href={`/dispensary/${dispensary.id}`}>
        <a className="mt-4 inline-block bg-white text-dark-green px-4 py-2 rounded hover:bg-opacity-75 transition ease-in-out duration-200">
          View More
        </a>
      </Link>
    </div>
  );
};

export default DispensaryCard;