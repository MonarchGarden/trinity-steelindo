import React, {PropsWithChildren} from 'react';
import {NavbarBackground} from '@trinity-steelindo/ui/molecules';
import './style.css';

type Props = PropsWithChildren & {
  companyLogoImg: string;
};

export const Header = ({children, companyLogoImg}: Props) => {
  return (
    <div>
      <header className="fixed left-0 right-0 top-0 flex bg-colorPrimary p-2">
        <div className="border border-white sm:w-1/5">
          <div className="flex flex-col items-center border border-white p-2 sm:flex-row xl:items-center">
            <img
              src={companyLogoImg}
              className="w-30 h-20 transform-gpu rounded-full border border-white transition-transform duration-300 ease-in-out"
              alt="Company Logo"
            />
            <div className="mt-2 hidden w-24 border border-white font-serif font-bold text-white transition-transform duration-300 ease-in-out sm:block">
              <h1>Trinity SteelIndo</h1>
            </div>
          </div>
        </div>
        {children}
      </header>
    </div>
  );
};
