import React from 'react';
import {IconLogoTrinityTrans} from '../../assets';

const SplashScreen = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-colorPrimary">
      <div className="relative h-20 w-20">
        <div className="animate-ease-in h-full w-full animate-spin rounded-full border-b-2 border-blue-500">
          <div className="absolute inset-0 flex animate-none items-center justify-center">
            <img
              src={IconLogoTrinityTrans}
              className="h-full w-full animate-none object-cover"
              alt="Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
