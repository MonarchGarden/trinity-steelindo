import React, {PropsWithChildren} from 'react';
import './style.css';

type Props = PropsWithChildren<{}>;

export const BackgroundContainer = ({children}: Props) => {
  return (
    <div className="w-full overflow-hidden bg-blue-800 p-5">
      <header>{children}</header>
    </div>
  );
};
