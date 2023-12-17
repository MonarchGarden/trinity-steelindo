import React from 'react';

const SplashScreen = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="h-20 w-20 animate-spin rounded-full border-b-2 border-blue-500"></div>
      <div className="ml-4 text-xl font-semibold text-gray-800">Loading...</div>
    </div>
  );
};

export default SplashScreen;
