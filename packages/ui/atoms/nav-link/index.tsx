import React, {PropsWithChildren, useState} from 'react';
import {Link} from 'react-router-dom';

type Props = PropsWithChildren & {
  navBarTitle?: string;
  path: string;
  isHeaderHovered: boolean;
  headerOpacity: number;
  isMenuOpen: boolean;
};

export const NavButtonLink = ({
  navBarTitle,
  path,
  isHeaderHovered,
  headerOpacity,
  isMenuOpen,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      to={path}
      className={`relative flex px-3 py-2 text-lg font-bold transition-all duration-300 ${
        isMenuOpen ? 'items-center justify-center' : 'items-start justify-start'
      } ${
        isHeaderHovered || headerOpacity > 0.4
          ? 'text-colorPrimary'
          : 'text-white'
      } hover:text-colorPrimary`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {navBarTitle}
      <span
        className={`${headerOpacity > 0.4 ? 'opacity-100' : 'opacity-50'} absolute bottom-0 left-0 h-0.5 w-full origin-left transform bg-colorPrimary transition-transform duration-300 ease-in-out ${
          isHovered ? 'scale-x-100' : 'scale-x-0'
        }`}></span>
    </Link>
  );
};
