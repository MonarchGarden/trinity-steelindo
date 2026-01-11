import React, {useEffect, useState} from 'react';
import LoadingScreen from './components/splash-screen';
import {Footer, Header} from '@trinity-steelindo/ui/organisms';
import {IconLogoTrinityBlack, IconLogoTrinityWhiteTrans} from './assets';
import './index.css';

import {fetchCatalogJson} from './services/catalog_service';
import type {CatalogTable} from './schemas/catalog.schema';
import {ProductTableSection} from './pages/ProductTableSection';

export default function ProductCatalog() {
  const [loading, setLoading] = useState(true);
  const [tables, setTables] = useState<CatalogTable[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const data = await fetchCatalogJson();
        if (mounted) setTables(data);
      } catch (e: any) {
        console.error(e);
        if (mounted) setError(e?.message ?? 'Failed to load catalog');
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  const navLinks = [
    {path: '/#', label: 'Beranda'},
    {path: '/trinity-steelindo/katalog-produk', label: 'Katalog Produk'},
  ];

  if (loading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-slate-900">
      <Header
        logoBlack={IconLogoTrinityBlack}
        logoWhite={IconLogoTrinityWhiteTrans}
        navLinks={navLinks}
      />

      <main className="mx-auto max-w-5xl items-center justify-center  px-4 pb-16 pt-28">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-slate-50">Katalog Produk</h1>
          <p className="mt-2 text-slate-300">
            Daftar spesifikasi produk Trinity Steelindo.
          </p>
        </div>
        {error ? (
          <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
            {error}
          </div>
        ) : null}

        <div className="mt-8 space-y-8">
          {tables.map((t) => (
            <ProductTableSection key={t.title} table={t} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
