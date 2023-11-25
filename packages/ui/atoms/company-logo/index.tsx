import React from 'react';
import './style.css';

type Props = {
  imgSrc: string;
};

export const CompanyLogo = ({imgSrc}: Props) => {
  return (
    <div className="flex items-center">
      <img
        src={imgSrc}
        alt="company Logo"
        className="tap:scale-110 mr-2 h-20 w-auto transform-gpu rounded-full transition-all"
      />
      <div className="hidden font-serif font-bold text-white sm:block">
        <h1>Trinity SteelIndo</h1>
      </div>
    </div>
  );
};
