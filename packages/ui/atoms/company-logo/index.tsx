import React from 'react';
import './style.css';
type Props = {
  imgSrc?: string;
};

export const CompanyLogo = ({imgSrc}: Props) => {
  return (
    <div>
      <h1 className="text-black">Logo</h1>
    </div>
  );
};
