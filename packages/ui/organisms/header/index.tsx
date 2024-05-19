import React, {
  PropsWithChildren,
  useCallback,
  useState,
  useEffect,
} from 'react';
import './style.css';
import {NavButtonLink} from '@trinity-steelindo/ui/atoms';

type Props = PropsWithChildren & {
  logoWhite: string;
  logoBlack: string;
  headerOpacity: number;
};

export const Header = ({logoWhite, logoBlack, headerOpacity}: Props) => {
  const [isHeaderHovered, setHeaderHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <nav className="border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={isHeaderHovered || headerOpacity > 0.4 ? logoWhite : logoBlack}
            className="h-8"
            alt="Logo"
          />
          <span
            className={`self-center whitespace-nowrap text-2xl font-semibold ${isHeaderHovered || headerOpacity > 0.4 ? 'text-black' : 'text-white'} dark:text-white`}>
            TRINITY{'\n'}STEELINDO
          </span>
        </div>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-solid-bg"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          onClick={toggleMenu}>
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
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto`}
          id="navbar-solid-bg">
          <ul className="mt-4 flex flex-col rounded-lg bg-gray-50 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:dark:bg-transparent rtl:space-x-reverse">
            <li>
              <NavButtonLink
                navBarTitle="Beranda"
                isHeaderHovered={isHeaderHovered}
                headerOpacity={headerOpacity}
              />
            </li>
            <li>
              <NavButtonLink
                navBarTitle="Katalog Produk"
                isHeaderHovered={isHeaderHovered}
                headerOpacity={headerOpacity}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
