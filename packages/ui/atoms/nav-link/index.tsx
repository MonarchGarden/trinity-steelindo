import {PropsWithChildren} from 'react';

type Props = PropsWithChildren & {
  to?: string;
  text?: string;
};

export const NavButtonLink = ({to, text}: Props) => {
  return (
    <a href={to} className="NavLink-Style">
      {text}
    </a>
  );
};
