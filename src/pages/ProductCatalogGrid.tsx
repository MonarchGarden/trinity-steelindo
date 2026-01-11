import React from 'react';
import type {CatalogTable} from '../schemas/catalog.schema';

type Props = {
  tables: CatalogTable[];
  onOpen: (table: CatalogTable) => void;
};

export function ProductCatalogGrid({tables, onOpen}: Props) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {tables.map((t) => (
        <button
          key={t.title}
          type="button"
          onClick={() => onOpen(t)}
          className="group rounded-2xl border border-slate-700/60 bg-slate-950/40 p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-slate-500/70 hover:bg-slate-950/60 hover:shadow-lg">
          <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-800/40">
            {t.imageSrc ? (
              <img
                src={t.imageSrc}
                alt={t.title}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-slate-400">
                No image
              </div>
            )}
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold text-slate-50">{t.title}</h3>

            <p className="mt-1 line-clamp-2 text-sm text-slate-300">
              Spesifikasi tersedia ({t.rows?.length ?? 0} item) • Kolom kanan:{' '}
              {t.rightHeader ?? '—'}
            </p>

            <div className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-slate-200">
              <span className="rounded-full bg-slate-800/60 px-3 py-1">
                Lihat Detail
              </span>
              <span className="text-slate-400 transition group-hover:translate-x-0.5">
                →
              </span>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
