import React from 'react';
import './index.css';
import {SvgIconClose, SvgIconMenu} from './assets';
import {Header} from '@trinity-steelindo/ui/organisms';

export default function App() {
  return (
    <Header iconMenuClose={<SvgIconClose />} iconMenuOpen={<SvgIconMenu />} />
  );
}
