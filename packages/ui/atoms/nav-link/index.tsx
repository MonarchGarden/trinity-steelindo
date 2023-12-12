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
      } hover:text-colorPrimaryh hover:border-colorPrimary`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <span
        className={`absolute bottom-0 left-0 h-0 w-0 transition-all ${
          isHeaderHovered ? '' : 'group-hover:w-full'
        }`}></span>
      {navBarTitle}
    </a>
  );
};
