import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CultivatorCard = ({ cultivator }) => {
  return (
    <div className="bg-dark-green rounded-lg p-4 opacity-75">
      <div className="flex items-center">
        <Image src={cultivator.logo} alt={cultivator.name} width={50} height={50} />
        <h2 className="text-white ml-4">{cultivator.name}</h2>
      </div>
      <div className="mt-2">
        <p className="text-white">Strains: {cultivator.strains.length}</p>
      </div>
      <div className="mt-2">
        <Link href={`/cultivator/${cultivator.id}`}>
          <a className="text-white underline">More Info</a>
        </Link>
      </div>
    </div>
  );
};

export default CultivatorCard;