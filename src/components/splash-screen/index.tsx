import React from 'react';
import {IconLogoTrinityTrans} from '../../assets';

const LoadingScreen = () => {
  return (
    <div className="flex h-screen items-center justify-center  bg-colorPrimary">
      <div className="relative h-32 w-32 ">
        <div className="animate-ease-in h-full w-full animate-spin rounded-full border-b-2 border-blue-500" />
        <img
          src={IconLogoTrinityTrans}
          className="absolute inset-0 h-32 w-32 items-center justify-center bg-center object-cover"
          alt="Logo"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
