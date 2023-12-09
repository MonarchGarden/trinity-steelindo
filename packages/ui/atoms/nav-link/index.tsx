import React, {PropsWithChildren} from 'react';

type Props = PropsWithChildren & {
  navBarTitle?: string;
};

export const NavButtonLink = ({navBarTitle}: Props) => {
  return (
    <a
      href="/"
      className="group-hover relative border-b-2 border-transparent px-3 py-2 text-sm font-bold text-white hover:text-black">
      <span className="border-colorPrimary absolute bottom-0 left-0 h-0 w-0 border-b-2 transition-all group-hover:w-full"></span>
      {navBarTitle}
    </a>
  );
};
