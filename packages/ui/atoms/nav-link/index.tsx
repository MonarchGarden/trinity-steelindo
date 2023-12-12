import React, {PropsWithChildren, useState} from 'react';

type Props = PropsWithChildren & {
  navBarTitle?: string;
  isHeaderHovered: boolean;
};

export const NavButtonLink = ({navBarTitle, isHeaderHovered}: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="/"
      className={`relative border-b-2 border-transparent px-3 py-2 text-sm font-bold ${
        isHeaderHovered ? 'text-colorPrimary' : 'text-white'
      } hover:text-colorPrimary`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {navBarTitle}
      <span
        className={`absolute bottom-0 left-0 h-0.5 border-b-2 border-colorPrimary transition-all ${
          isHovered ? 'w-full' : 'w-0'
        }`}></span>{' '}
    </a>
  );
};
