import React, {useState, PropsWithChildren} from 'react';
import {NavbarBackground} from '@trinity-steelindo/ui/molecules';
import './style.css';
import {CompanyLogo} from '@trinity-steelindo/ui/atoms';

type Props = PropsWithChildren & {
  iconMenuOpen: React.ReactNode;
  iconMenuClose: React.ReactNode;
};

export const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'features',
    title: 'Features',
  },
  {
    id: 'product',
    title: 'Product',
  },
  {
    id: 'clients',
    title: 'Clients',
  },
];

export const Header = ({iconMenuClose, iconMenuOpen, children}: Props) => {
  const [active, setActive] = useState('Home');
  const [toggle] = useState(false);

  return (
    <NavbarBackground>
      {toggle ? iconMenuOpen : iconMenuClose}
      {children}
    </NavbarBackground>
  );
};
