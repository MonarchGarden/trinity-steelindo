import React, {PropsWithChildren, useState} from 'react';
import './style.css';
import {NavButtonLink} from '@trinity-steelindo/ui/atoms';

type Props = PropsWithChildren & {
  logoWhite: string;
  logoBlack: string;
  headerOpacity: number;
};

//TODO as of now everything is hardcoded
export const Header = ({logoWhite, logoBlack, headerOpacity}: Props) => {
  //Forced to use useState to change the navbuttonLink Text
  const [isHeaderHovered, setHeaderHovered] = useState(false);
  return (
    // Desktop Version
    <header
      className={`${
        headerOpacity! > 0.2 ? 'opacity-0' : 'opacity-100'
      } group fixed top-0 w-full overflow-hidden bg-colorPrimary bg-opacity-75 p-3 transition-all hover:bg-white group-hover:text-black
      md:flex`}
      onMouseEnter={() => setHeaderHovered(true)}
      onMouseLeave={() => setHeaderHovered(false)}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={isHeaderHovered ? logoWhite : logoBlack}
            className="h-20 w-20"
          />
          <span
            className={`self-center whitespace-nowrap text-2xl font-bold sm:text-lg md:whitespace-nowrap md:text-xl ${
              isHeaderHovered ? 'text-colorPrimary' : 'text-white'
            } trinity-title-text whitespace-pre-line font-helios-condensed`}>
            TRINITY{'\n'}STEELINDO
          </span>
        </div>
        <div className="ml-auto flex items-center">
          {' '}
          {/* Use ml-auto to push the content to the right */}
          <nav className="hidden items-center space-x-4 font-helios-condensed md:flex">
            <NavButtonLink
              navBarTitle="Beranda"
              isHeaderHovered={isHeaderHovered}
            />
            <NavButtonLink
              navBarTitle="Katalog Produk"
              isHeaderHovered={isHeaderHovered}
            />
          </nav>
          {/* Button for mobile view */}
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="h-10 w-10 items-center justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-default"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
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
          </button>
        </div>
      </div>
    </header>
  );
};
