import {PropsWithChildren} from 'react';

type Props = PropsWithChildren;

export const NavBackground = ({children}: Props) => {
  return <div className="NavBackground">{children}</div>;
};
