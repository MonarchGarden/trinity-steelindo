import React, {useState, useEffect} from 'react';
import WaveBackground from './wave_background';
import {Header} from '@trinity-steelindo/ui/organisms';
import {IconLogoTrinityBlack, IconLogoTrinityWhiteTrans} from './assets';
import LoadingScreen from './components/splash-screen';
import './index.css';

export default function ProductCatalog() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }, []);

  const navLinks = [
    {path: '/trinity-steelindo', label: 'Beranda'},
    {path: '/trinity-steelindo/katalog-produk', label: 'Katalog Produk'},
  ];

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="relative h-screen bg-blue-500">
          <Header
            logoBlack={IconLogoTrinityBlack}
            logoWhite={IconLogoTrinityWhiteTrans}
            navLinks={navLinks}
          />
          <WaveBackground />
        </div>
      )}
    </>
  );
}
