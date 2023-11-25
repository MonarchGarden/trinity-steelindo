import React, {PropsWithChildren} from 'react';
import './style.css';

type Props = PropsWithChildren<{}>;

export const BackgroundContainer = ({children}: Props) => {
  return (
    <div className="bg-colorPrimary w-full overflow-hidden p-2">
      <header>{children}</header>
    </div>
  );
};
