import React from 'react';
import type {CatalogTable} from '../schemas/catalog.schema';

type Props = {
  table: CatalogTable;
};

export function ProductTableSection({table}: Props) {
  return (
    <section className="overflow-hidden rounded-xl border border-slate-50 bg-slate-50 shadow-sm">
      {table.imageSrc ? (
        <div className="h-44 w-full bg-slate-100">
          <img
            src={table.imageSrc}
            alt={table.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      ) : null}
      <div className="px-6 py-5">
        <h2 className="text-xl font-semibold text-slate-800">{table.title}</h2>
      </div>
      <table className="w-full border-t border-slate-200 text-sm">
        <thead className="bg-slate-900 text-white">
          <tr>
            <th className="w-16 px-4 py-3 text-left">NO</th>
            <th className="px-4 py-3 text-left">DESKRIPSI</th>
            <th className="w-56 px-4 py-3 text-left">
              {(table.rightHeader ?? 'BERAT').toUpperCase()}
            </th>
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row.no} className="border-t border-slate-100">
              <td className="px-4 py-3">{row.no}</td>
              <td className="px-4 py-3 font-medium">{row.deskripsi}</td>
              <td className="px-4 py-3">{row.berat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
