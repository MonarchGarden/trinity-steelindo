import React, {PropsWithChildren, useState} from 'react';

type Props = PropsWithChildren & {
  navBarTitle?: string;
  isHeaderHovered: boolean;
  headerOpacity: number;
};

export const NavButtonLink = ({
  navBarTitle,
  isHeaderHovered,
  headerOpacity,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="/"
      className={`relative px-3 py-2 text-lg font-bold transition-all duration-300 ${
        isHeaderHovered || headerOpacity > 0.4
          ? 'text-colorPrimary'
          : 'text-white'
      } hover:text-colorPrimary`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {navBarTitle}
      <span
        className={`absolute bottom-0 left-0 h-0.5 w-full origin-left transform bg-colorPrimary transition-transform duration-300 ease-in-out ${
          isHovered ? 'scale-x-100' : 'scale-x-0'
        }`}
        style={{
          opacity: headerOpacity > 0.4 ? 1 : 0.5,
        }}></span>
    </a>
  );
};
