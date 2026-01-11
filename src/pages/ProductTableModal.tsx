import React, {useEffect} from 'react';
import type {CatalogTable} from '../schemas/catalog.schema';
import {ProductTableSection} from './ProductTableSection';

type Props = {
  open: boolean;
  table: CatalogTable | null;
  onClose: () => void;
};

export function ProductTableModal({open, table, onClose}: Props) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open || !table) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-black/60"
      />

      <div className="relative mx-auto mt-16 w-[min(980px,92vw)]">
        <div className="rounded-2xl border border-slate-700/60 bg-slate-900 shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-700/60 px-6 py-4">
            <div>
              <p className="text-xs font-medium text-slate-400">
                Katalog Produk
              </p>
              <h3 className="text-lg font-semibold text-slate-50">
                {table.title}
              </h3>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-slate-700/60 bg-slate-950/40 px-3 py-2 text-sm text-slate-200 hover:bg-slate-950/70">
              Tutup
            </button>
          </div>

          <div className="max-h-[75vh] overflow-auto p-6">
            {/* reuse your existing table section */}
            <ProductTableSection table={table} />
          </div>
        </div>
      </div>
    </div>
  );
}
