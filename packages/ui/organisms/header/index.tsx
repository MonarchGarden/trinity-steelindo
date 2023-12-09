import React, {PropsWithChildren} from 'react';
import './style.css';
import {NavButtonLink} from '@trinity-steelindo/ui/atoms';

type Props = PropsWithChildren;

//TODO as of now everything is hardcoded
export const Header = ({children}: Props) => {
  return (
    <div>
      <header className="fixed left-0 right-0 top-0 flex bg-colorPrimary object-right-top p-2">
        <nav className="mx-auto">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="hidden md:block">
                  <div className="flex content-center items-center">
                    <NavButtonLink text="Beranda" />
                    <NavButtonLink text="Katalog Produk" />
                    <NavButtonLink text="Tentang Kami" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {children}
    </div>
  );
};
