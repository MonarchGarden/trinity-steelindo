import {PropsWithChildren} from 'react';

type Props = PropsWithChildren;

export const NavBackground = ({children}: Props) => {
  return (
    <div className="NavBackground">
      <header>{children}</header>
    </div>
  );
};
