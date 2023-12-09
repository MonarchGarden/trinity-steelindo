import React, {PropsWithChildren} from 'react';
import './style.css';

type Props = PropsWithChildren;

export const Body = ({children}: Props) => {
  return (
    <main className="mx-auto max-w-7xl bg-colorPrimary px-4 sm:px-6 lg:px-8">
      {children}
    </main>
  );
};
