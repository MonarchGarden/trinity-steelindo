import React, {PropsWithChildren, useState, useEffect} from 'react';
import './style.css';
import {NavButtonLink} from '@trinity-steelindo/ui/atoms';

type Props = PropsWithChildren & {
  logoWhite: string;
  logoBlack: string;
};

export const Header = ({logoWhite, logoBlack}: Props) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(Math.min(window.scrollY, 200));
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerOpacity = scrollPosition / 200;
  const isScrolled = headerOpacity > 0.2;

  return (
    <header
      className={`fixed top-0 w-full p-3 transition-all duration-700 ease-linear ${
        isMobileMenuOpen || isHovered
          ? 'bg-white bg-opacity-65 shadow-md'
          : isScrolled
            ? `bg-white bg-opacity-65 shadow-md`
            : 'bg-transparent'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={
              isScrolled || isHovered || isMobileMenuOpen
                ? logoWhite
                : logoBlack
            }
            className="h-12 w-12 transition-opacity duration-700"
            alt={`${isScrolled || isHovered || isMobileMenuOpen ? 'Black Logo' : 'White Logo'}`}
          />
          <span
            className={`ml-3 text-xl font-bold transition-colors duration-700 ${
              isScrolled || isHovered || isMobileMenuOpen
                ? 'text-black'
                : 'text-white'
            }`}>
            TRINITY STEELINDO
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-4 md:flex">
          <NavButtonLink
            navBarTitle="Beranda"
            isHeaderHovered={isHovered || isMobileMenuOpen}
            headerOpacity={headerOpacity}
          />
          <NavButtonLink
            navBarTitle="Katalog Produk"
            isHeaderHovered={isHovered || isMobileMenuOpen}
            headerOpacity={headerOpacity}
          />
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="block p-2 text-black md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span className="sr-only">Toggle Menu</span>☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div>
          <ul className="space-y-4 p-4">
            <li>
              <NavButtonLink
                navBarTitle="Beranda"
                isHeaderHovered={true}
                headerOpacity={headerOpacity}
              />
            </li>
            <li>
              <NavButtonLink
                navBarTitle="Katalog Produk"
                isHeaderHovered={true}
                headerOpacity={headerOpacity}
              />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
