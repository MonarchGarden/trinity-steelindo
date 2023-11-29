import React, {PropsWithChildren} from 'react';
import './style.css';

type Props = PropsWithChildren<{}>;

export const BackgroundContainer = ({children}: Props) => {
  return (
    <div>
      <header className="fixed left-0 right-0 top-0 flex bg-colorPrimary p-2">
        {children}
      </header>
    </div>
  );
};
