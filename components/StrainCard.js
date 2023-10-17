import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const StrainCard = ({ strain }) => {
  return (
    <div className="bg-dark-green rounded-lg p-4 opacity-75">
      <div className="flex items-center">
        <Image src={strain.logo} alt={strain.name} width={50} height={50} />
        <h2 className="text-white ml-4">{strain.name}</h2>
      </div>
      <div className="mt-2">
        <p className="text-white">Type: {strain.type}</p>
        <p className="text-white">THC Level: {strain.thcLevel}</p>
        <p className="text-white">CBD Level: {strain.cbdLevel}</p>
        <p className="text-white">Beta Caryophyllene: {strain.betaCaryophyllene} mg/g</p>
        <p className="text-white">Beta Myrcene: {strain.betaMyrcene} mg/g</p>
        <p className="text-white">Limonene: {strain.limonene} mg/g</p>
      </div>
      <div className="mt-2">
        <p className="text-white">Effects: {strain.effects.join(', ')}</p>
      </div>
      <Link href={`/strain/${strain.id}`}>
        <a className="mt-4 inline-block bg-white text-dark-green px-4 py-2 rounded">More Info</a>
      </Link>
    </div>
  );
};

export default StrainCard;