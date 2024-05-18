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
    <div className="header-container relative">
      <header
        className={`${headerOpacity < 0.3 ? 'opacity-100' : 'opacity-0'} ${
          headerOpacity > 0.4 ? 'bg-white text-black opacity-100' : 'opacity-0'
        } 
      group fixed top-0 w-full overflow-hidden p-3 transition-all hover:bg-white group-hover:text-black md:flex`}
        onMouseEnter={() => setHeaderHovered(true)}
        onMouseLeave={() => setHeaderHovered(false)}>
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={
                isHeaderHovered || headerOpacity > 0.4 ? logoWhite : logoBlack
              }
              className="h-20 w-20"
              alt="Logo"
            />
            <span
              className={`self-center whitespace-nowrap text-2xl font-bold sm:text-lg md:whitespace-nowrap md:text-xl ${
                isHeaderHovered || headerOpacity > 0.4
                  ? 'text-colorPrimary'
                  : 'text-white'
              } trinity-title-text whitespace-pre-line font-helios-condensed`}>
              TRINITY{'\n'}STEELINDO
            </span>
          </div>
          <div className="relative ml-auto flex items-center">
            <nav className="desktop-views-nav-menu space-x-4 font-helios-condensed">
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
            <div>
              <button
                data-collapse-toggle="navbar-default"
                type="button"
                className="mobile-views-nav-menu h-10 w-10 items-center justify-center rounded-lg p-2 align-middle text-gray-500 hover:bg-colorSecondary focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded={isMenuOpen ? 'true' : 'false'}
                onClick={toggleMenu}>
                {isMenuOpen ? (
                  // X icon
                  <svg
                    className="h-7 w-7"
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  // Ellipsis button
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
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
      <div
        className={`fixed left-0 right-0 top-80 z-50 bg-white transition-transform duration-300 ${
          isMenuOpen ? 'translate-y-full' : 'translate-y-0'
        }`}>
        <div className="flex justify-end p-4">
          <button
            type="button"
            className="h-7 w-7 rounded text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={toggleMenu}>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="p-5">
          <li className="mb-2">Menu Item 1</li>
          <li className="mb-2">Menu Item 2</li>
          <li className="mb-2">Menu Item 3</li>
        </ul>
      </div>
    </div>
  );
};
