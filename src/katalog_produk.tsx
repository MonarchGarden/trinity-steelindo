import React, {useCallback, useEffect, useMemo, useState} from 'react';
import LoadingScreen from './components/splash-screen';
import {Footer, Header} from '@trinity-steelindo/ui/organisms';
import {IconLogoTrinityBlack, IconLogoTrinityWhiteTrans} from './assets';
import './index.css';

import {fetchCatalogJson} from './services/catalog_service';
import type {CatalogTable} from './schemas/catalog.schema';
import {ProductTableModal} from './pages/ProductTableModal';
import {ProductCatalogGrid} from './pages/ProductCatalogGrid';

export default function ProductCatalog() {
  const [loading, setLoading] = useState(true);
  const [tables, setTables] = useState<CatalogTable[]>([]);
  const [error, setError] = useState<string | null>(null);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<CatalogTable | null>(null);

  const navLinks = useMemo(
    () => [
      {path: '/#', label: 'Beranda'},
      {path: '/trinity-steelindo/katalog-produk', label: 'Katalog Produk'},
    ],
    [],
  );

  const loadCatalog = useCallback(async (signal?: AbortSignal) => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchCatalogJson();

      if (signal?.aborted) return;

      setTables(data);
    } catch (e: any) {
      if (signal?.aborted) return;
      console.error(e);
      setError(e?.message ?? 'Failed to load catalog');
      setTables([]);
    } finally {
      if (signal?.aborted) return;
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    void loadCatalog(controller.signal);

    return () => controller.abort();
  }, [loadCatalog]);

  const handleOpen = useCallback((t: CatalogTable) => {
    setSelected(t);
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    setSelected(null);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-slate-900">
      <Header
        logoBlack={IconLogoTrinityBlack}
        logoWhite={IconLogoTrinityWhiteTrans}
        navLinks={navLinks}
      />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-28">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-slate-50">Katalog Produk</h1>
          <p className="mt-2 text-slate-300">
            Daftar spesifikasi produk Trinity Steelindo.
          </p>
        </div>

        {error ? (
          <div className="mx-auto mb-6 max-w-2xl rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
            {error}
          </div>
        ) : null}

        <ProductCatalogGrid tables={tables} onOpen={handleOpen} />

        <ProductTableModal open={open} table={selected} onClose={handleClose} />
      </main>

      <Footer />
    </div>
  );
}
