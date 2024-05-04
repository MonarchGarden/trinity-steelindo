import React, {PropsWithChildren} from 'react';
import './style.css';

type Props = PropsWithChildren & {
  companyLogoImg: string;
  title: string;
};

export const Navbar = ({companyLogoImg, title}: Props) => {
  return (
    <div className="flex flex-col items-center p-2 sm:flex-row xl:items-center">
      <img
        src={companyLogoImg}
        className="header-logo w-30 h-20 transform-gpu rounded-full  transition-transform duration-300 ease-in-out"
      />
      <div className="group-textbox-company-name ms-2 mt-2 hidden w-24 transform font-helios-condensed font-bold text-white transition-transform duration-300 ease-in-out sm:block">
        <h1>{title}</h1>
      </div>
    </div>
  );
};
