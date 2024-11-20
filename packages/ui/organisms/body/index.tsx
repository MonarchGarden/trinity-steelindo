import React, {PropsWithChildren} from 'react';
import Wavify from 'react-wavify';

type Props = PropsWithChildren;

export const Body = ({children}: Props) => {
  return (
    <section className="relative flex h-full w-full flex-col overflow-hidden bg-colorBackground px-10 py-10">
      <div className="relative z-10">{children}</div>
    </section>
  );
};
