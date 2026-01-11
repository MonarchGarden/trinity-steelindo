import React, {useEffect, useState} from 'react';
import WaveBackground from './wave_background';
import {Header} from '@trinity-steelindo/ui/organisms';
import {IconLogoTrinityBlack, IconLogoTrinityWhiteTrans} from './assets';
import LoadingScreen from './components/splash-screen';
import './index.css';
import {fetchCatalogJson} from './services/catalog_service';

export default function ProductCatalog() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        await fetchCatalogJson();
      } catch (e) {
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  const navLinks = [
    {path: '/trinity-steelindo', label: 'Beranda'},
    {path: '/trinity-steelindo/katalog-produk', label: 'Katalog Produk'},
  ];

  return loading ? (
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
  );
}
