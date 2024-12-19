import React, {PropsWithChildren} from 'react';

type Props = PropsWithChildren;

export const Body = ({children}: Props) => {
  return (
    <section className="relative flex h-screen w-screen flex-col overflow-x-hidden bg-colorBackground px-10 py-10">
      {children}
    </section>
  );
};
