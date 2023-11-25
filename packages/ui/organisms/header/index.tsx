import React, {PropsWithChildren} from 'react';
import {NavbarBackground} from '@trinity-steelindo/ui/molecules';
import './style.css';

type Props = PropsWithChildren & {
  companyLogoImg: string;
};

export const Header = ({children, companyLogoImg}: Props) => {
  return (
    <NavbarBackground backgroundLogoImg={companyLogoImg}>
      {children}
    </NavbarBackground>
  );
};
