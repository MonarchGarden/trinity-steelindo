import React, {PropsWithChildren} from 'react';
import './style.css';

type Props = PropsWithChildren;

export const Body = ({children}: Props) => {
  return (
    <body className="flex h-full w-full flex-col bg-colorBackground px-10 py-10 md:flex">
      {children}
    </body>
  );
};
