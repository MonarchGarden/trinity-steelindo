import React from 'react';

type Props = {
  imgSrc?: string;
};

export const CompanyLogo = ({imgSrc}: Props) => {
  return (
    <div>
      <img src={imgSrc} />
    </div>
  );
};
