import React, {PropsWithChildren} from 'react';
import {BackgroundContainer, CompanyLogo} from '../../atoms';
import './style.css';

type Props = PropsWithChildren & {
  backgroundLogoImg: string;
};

export const NavbarBackground = ({children, backgroundLogoImg}: Props) => (
  <div>
    <BackgroundContainer>
      <div className="w-500 border border-white">
        <CompanyLogo imgSrc={backgroundLogoImg} />
        {children}
      </div>
    </BackgroundContainer>
  </div>
);
