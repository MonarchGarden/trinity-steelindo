import React, {PropsWithChildren} from 'react';
import {BackgroundContainer} from '../../atoms';
import './style.css';
type Props = PropsWithChildren;

export const NavbarBackground = ({children}: Props) => (
  <div>
    <BackgroundContainer>{children}</BackgroundContainer>
  </div>
);
