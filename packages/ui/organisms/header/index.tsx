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
        isHovered
          ? 'bg-white shadow-md'
          : isScrolled
            ? `bg-white bg-opacity-${Math.round(headerOpacity * 100)} shadow-md`
            : 'bg-transparent'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={isScrolled || isHovered ? logoWhite : logoBlack}
            className="h-12 w-12 transition-opacity duration-700"
            alt={`${isScrolled || isHovered ? 'Black Logo' : 'White Logo'}`}
          />
          <span
            className={`ml-3 text-xl font-bold transition-colors duration-700 ${
              isScrolled || isHovered ? 'text-black' : 'text-white'
            }`}>
            TRINITY STEELINDO
          </span>
        </div>
        <nav className="hidden space-x-4 md:flex">
          <NavButtonLink
            navBarTitle="Beranda"
            isHeaderHovered={isHovered}
            headerOpacity={headerOpacity}
          />
          <NavButtonLink
            navBarTitle="Katalog Produk"
            isHeaderHovered={isHovered}
            headerOpacity={headerOpacity}
          />
        </nav>
      </div>
    </header>
  );
};
