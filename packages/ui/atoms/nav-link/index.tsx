import React, {PropsWithChildren} from 'react';

type Props = PropsWithChildren & {
  text?: string;
};

export const NavButtonLink = ({text}: Props) => {
  return (
    <a
      href="/"
      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">
      {text}
    </a>
  );
};
