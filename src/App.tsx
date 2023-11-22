import React from 'react';
import './index.css';
import {Header} from '@trinity-steelindo/ui/organisms';
import {SvgIconClose, SvgIconMenu} from './assets';

export default function App() {
  return (
    <Header iconMenuClose={<SvgIconClose />} iconMenuOpen={<SvgIconMenu />}>
      Test
    </Header>
  );
}
