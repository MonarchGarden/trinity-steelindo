import React, {PropsWithChildren} from 'react';

type Props = PropsWithChildren;

export const Body = ({children}: Props) => {
  return (
    <section className="relative flex min-h-screen w-full flex-col bg-colorBackground px-10 py-10">
      <div className="bg-colorPrimar relative flex min-h-screen w-full flex-col overflow-y-auto">
        {children}
      </div>
    </section>
  );
};
