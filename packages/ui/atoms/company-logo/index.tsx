import React from 'react';
import './style.css';

type Props = {
  imgSrc: string;
};

export const CompanyLogo = ({imgSrc}: Props) => {
  return (
    <div className="flex items-center">
      <img src={imgSrc} alt="company Logo" className="h-15 w-20" />
      <div className="text-white">Trinity SteelIndo</div>
    </div>
  );
};
