import React, {PropsWithChildren} from 'react';
import {BackgroundContainer, FlexContainer, ContainerWidth} from '../../atoms';
import './style.css';
type Props = PropsWithChildren;

export const NavbarBackground = ({children}: Props) => (
  <div>
    <BackgroundContainer>
      <FlexContainer>
        <ContainerWidth>{children}</ContainerWidth>
      </FlexContainer>
    </BackgroundContainer>
  </div>
);
