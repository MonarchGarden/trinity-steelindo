import React, {PropsWithChildren} from 'react';
import './style.css';

type Props = PropsWithChildren;

export const BackgroundContainer = ({children}: Props) => {
  return (
    <div className="h-full w-full overflow-hidden bg-orange-600">
      {children}
    </div>
  );
};
