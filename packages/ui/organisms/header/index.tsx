import React, {PropsWithChildren, useState} from 'react';
import './style.css';
import {NavButtonLink} from '@trinity-steelindo/ui/atoms';

type Props = PropsWithChildren & {
  logoWhite: string;
  logoBlack: string;
};

//TODO as of now everything is hardcoded
export const Header = ({logoWhite, logoBlack}: Props) => {
  //Forced to use useState to change the navbuttonLink Text
  const [isHeaderHovered, setHeaderHovered] = useState(false);

  return (
    <header
      className="group fixed top-0 w-full overflow-hidden p-3 transition-all hover:bg-white group-hover:text-black md:flex"
      onMouseEnter={() => setHeaderHovered(true)}
      onMouseLeave={() => setHeaderHovered(false)}>
      <div className="container mx-auto flex items-center justify-between">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={isHeaderHovered ? logoWhite : logoBlack}
            className="h-20 w-20"
          />
          <span
            className={`self-center whitespace-nowrap text-2xl font-bold ${
              isHeaderHovered ? 'text-colorPrimary' : 'text-white'
            }`}
            style={{whiteSpace: 'pre-line'}}>
            Trinity{'\n'}SteelIndo
          </span>
        </a>
        <nav className="hidden md:flex">
          <div className="flex items-center">
            <NavButtonLink
              navBarTitle="Beranda"
              isHeaderHovered={isHeaderHovered}
            />
            <NavButtonLink
              navBarTitle="Katalog Produk"
              isHeaderHovered={isHeaderHovered}
            />
            <NavButtonLink
              navBarTitle="Tentang Kami"
              isHeaderHovered={isHeaderHovered}
            />
          </div>
        </nav>
      </div>
    </header>
  );
};
