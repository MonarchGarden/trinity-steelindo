import React from 'react';
import './style.css';

type Props = {
  imgSrc: string;
};

export const CompanyLogo = ({imgSrc}: Props) => {
  return (
    <div>
      <img src={imgSrc} alt="company Logo" />
    </div>
  );
};
