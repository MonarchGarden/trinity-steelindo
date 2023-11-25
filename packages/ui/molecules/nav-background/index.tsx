import React, {PropsWithChildren} from 'react';
import {BackgroundContainer, CompanyLogo, ContainerWidth} from '../../atoms';
import './style.css';

type Props = PropsWithChildren & {
  backgroundLogoImg: string;
};

export const NavbarBackground = ({children, backgroundLogoImg}: Props) => (
  <div>
    <BackgroundContainer>
      <ContainerWidth>
      <CompanyLogo imgSrc={backgroundLogoImg} />
      {children}
      </ContainerWidth>
    </BackgroundContainer>
  </div>
);
