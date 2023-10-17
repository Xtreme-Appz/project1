import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { getStrains } from '../lib/strains';
import { getCultivators } from '../lib/cultivators';
import { getDispensaries } from '../lib/dispensaries';
import SideNavigation from '../components/SideNavigation';
import StrainCard from '../components/StrainCard';
import CultivatorCard from '../components/CultivatorCard';
import DispensaryCard from '../components/DispensaryCard';
import AdPlaceholder from '../components/AdPlaceholder';

export default function Home() {
  const [strains, setStrains] = useState([]);
  const [cultivators, setCultivators] = useState([]);
  const [dispensaries, setDispensaries] = useState([]);

  useEffect(() => {
    getStrains().then(setStrains);
    getCultivators().then(setCultivators);
    getDispensaries().then(setDispensaries);
  }, []);

  return (
    <div className="dark:bg-green-900 dark:text-white">
      <Head>
        <title>Culti-Club</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SideNavigation />

      <main className="p-6">
        <h1 className="text-4xl font-bold">Top 20 Strains</h1>
        <div className="grid grid-cols-4 gap-4">
          {strains.slice(0, 20).map((strain) => (
            <Link href={`/strain/${strain.id}`} key={strain.id}>
              <a><StrainCard strain={strain} /></a>
            </Link>
          ))}
        </div>

        <h2 className="text-3xl font-bold mt-6">Sponsored Cultivators</h2>
        <div className="grid grid-cols-3 gap-4">
          {cultivators.map((cultivator) => (
            <Link href={`/cultivator/${cultivator.id}`} key={cultivator.id}>
              <a><CultivatorCard cultivator={cultivator} /></a>
            </Link>
          ))}
        </div>

        <h2 className="text-3xl font-bold mt-6">Sponsored Dispensaries</h2>
        <div className="grid grid-cols-3 gap-4">
          {dispensaries.map((dispensary) => (
            <Link href={`/dispensary/${dispensary.id}`} key={dispensary.id}>
              <a><DispensaryCard dispensary={dispensary} /></a>
            </Link>
          ))}
        </div>

        <AdPlaceholder />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const strains = await getStrains();
  const cultivators = await getCultivators();
  const dispensaries = await getDispensaries();

  return {
    props: {
      strains,
      cultivators,
      dispensaries,
    },
  };
}