import React from 'react';
import {FallbackProps} from 'react-error-boundary';
import {Link} from 'react-router-dom';

export function ErrorFallback({error, resetErrorBoundary}: FallbackProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-colorPrimary px-6 text-center">
      <h1 className="font-helios-condensed text-5xl font-bold text-red-500">
        Terjadi Kesalahan
      </h1>
      <p className="mt-4 max-w-md text-gray-300">
        Mohon maaf, terjadi kendala pada sistem.
      </p>

      <div className="mt-8 flex gap-3">
        <button
          onClick={resetErrorBoundary}
          className="rounded bg-gray-700 px-5 py-2 text-white hover:bg-gray-600">
          Coba Lagi
        </button>
        <Link
          to="/"
          className="rounded bg-blue-600 px-5 py-2 text-white hover:bg-blue-500">
          Ke Beranda
        </Link>
      </div>

      <pre className="mt-6 max-w-2xl overflow-auto text-left text-xs text-red-300 opacity-70">
        {error.message}
      </pre>
    </div>
  );
}
