import React, {useState} from 'react';
import './style.css';
import {NavButtonLink} from '@trinity-steelindo/ui/atoms';

//TODO as of now everything is hardcoded
export const Header = () => {
  //Forced to use useState to change the navbuttonLink Text
  const [isHeaderHovered, setHeaderHovered] = useState(false);

  return (
    <header
      className="group fixed top-0 hidden w-full overflow-hidden p-3 transition-all hover:bg-white group-hover:text-black md:flex"
      onMouseEnter={() => setHeaderHovered(true)}
      onMouseLeave={() => setHeaderHovered(false)}>
      <nav className="mx-auto ml-auto flex h-full max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <div className="header-logo hidden md:block">
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
          </div>
        </div>
      </nav>
    </header>
  );
};
