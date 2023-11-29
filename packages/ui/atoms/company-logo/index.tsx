import React from 'react';
import './style.css';

type Props = {
  imgSrc: string;
};

export const CompanyLogo = ({imgSrc}: Props) => {
  return (
    <div className="flex flex-col items-center border border-white p-2 sm:flex-row xl:items-center">
      <img
        src={imgSrc}
        className="h-25 w-10 transform-gpu rounded-full border border-white transition-transform duration-300 ease-in-out"
      />
      <div className="hidden w-24 border border-white p-5 font-serif font-bold text-white transition-transform duration-300 ease-in-out sm:block">
        <h1>Trinity SteelIndo</h1>
      </div>
    </div>
  );
};
