import React, {PropsWithChildren, useCallback, useState} from 'react';
import './style.css';
import {NavButtonLink} from '@trinity-steelindo/ui/atoms';

type Props = PropsWithChildren & {
  logoWhite: string;
  logoBlack: string;
  headerOpacity: number;
  toggleMenu: () => void;
};

export const Header = ({
  logoWhite,
  logoBlack,
  headerOpacity,
  toggleMenu,
}: Props) => {
  const [isHeaderHovered, setHeaderHovered] = useState(false);

  return (
    <header
      className={`${headerOpacity < 0.7 ? 'opacity-100' : 'opacity-0'} ${headerOpacity > 0.9 ? 'bg-white text-black opacity-100' : 'opacity-0'} 
      group fixed top-0 w-full overflow-hidden p-3 transition-all hover:bg-white group-hover:text-black md:flex`}
      onMouseEnter={() => setHeaderHovered(true)}
      onMouseLeave={() => setHeaderHovered(false)}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={isHeaderHovered || headerOpacity > 0.9 ? logoWhite : logoBlack}
            className="h-20 w-20"
          />
          <span
            className={`self-center whitespace-nowrap text-2xl font-bold sm:text-lg md:whitespace-nowrap md:text-xl ${
              isHeaderHovered || headerOpacity > 0.9
                ? 'text-colorPrimary'
                : 'text-white'
            } trinity-title-text whitespace-pre-line font-helios-condensed`}>
            TRINITY{'\n'}STEELINDO
          </span>
        </div>
        <div className="ml-auto flex items-center">
          <nav className="hidden items-center space-x-4 font-helios-condensed md:flex">
            <NavButtonLink
              navBarTitle="Beranda"
              isHeaderHovered={isHeaderHovered}
              headerOpacity={headerOpacity}
            />
            <NavButtonLink
              navBarTitle="Katalog Produk"
              isHeaderHovered={isHeaderHovered}
              headerOpacity={headerOpacity}
            />
          </nav>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg p-2 text-gray-500 hover:bg-colorSecondary focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-default"
            aria-expanded={'false'}
            onClick={toggleMenu}>
            {/* {isMenuOpen ? (
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 20 20">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg> */}
            {/* // ) : ( */}
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
            {/* )} */}
          </button>
        </div>
      </div>
    </header>
  );
};
