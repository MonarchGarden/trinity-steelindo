import React, {PropsWithChildren} from 'react';
import './style.css';

type Props = PropsWithChildren;

export const BackgroundContainer = ({children}: Props) => {
  return (
    <div className="h-full w-full overflow-hidden bg-zinc-400">{children}</div>
  );
};
