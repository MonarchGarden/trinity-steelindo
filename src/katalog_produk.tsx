import React from 'react';
import WaveBackground from './wave_background';

export default function ProductCatalog() {
  return (
    <div className="relative h-screen bg-blue-500">
      <div className="py-20 text-center text-white">
        <h1 className="text-4xl font-bold">Welcome to My React App</h1>
        <p className="mt-4">
          This is a smooth wave animation using Framer Motion and SVG.
        </p>
      </div>
      <WaveBackground />
    </div>
  );
}
