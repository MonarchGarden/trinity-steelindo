import React from 'react';
import {Link} from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-colorPrimary px-6 text-center">
      <h1 className="font-helios-condensed text-7xl font-bold text-white">
        404
      </h1>
      <p className="mt-4 max-w-md text-gray-300">
        Halaman yang Anda cari tidak ditemukan.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-500">
        Kembali ke Beranda
      </Link>
    </div>
  );
}
