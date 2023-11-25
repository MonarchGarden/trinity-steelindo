import React, {PropsWithChildren} from 'react';
import {BackgroundContainer, CompanyLogo} from '../../atoms';
import './style.css';

type Props = PropsWithChildren & {
  backgroundLogoImg: string;
};

export const NavbarBackground = ({children, backgroundLogoImg}: Props) => (
  <div>
    <BackgroundContainer>
      <CompanyLogo imgSrc={backgroundLogoImg} />
      {children}
    </BackgroundContainer>
  </div>
);
