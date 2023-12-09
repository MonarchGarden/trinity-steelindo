import React from 'react';
import './style.css';
import {NavButtonLink} from '@trinity-steelindo/ui/atoms';

//TODO as of now everything is hardcoded
export const Header = () => {
  return (
    <header className="group fixed top-0 flex w-full overflow-hidden p-3 transition-all hover:bg-white">
      <nav className="mx-auto ml-auto flex h-full max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <div className="header-logo hidden md:block">
            <div className="flex items-center">
              <NavButtonLink navBarTitle="Beranda" />
              <NavButtonLink navBarTitle="Katalog Produk" />
              <NavButtonLink navBarTitle="Tentang Kami" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
