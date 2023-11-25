import React from 'react';
import './index.css';
import {Header} from '@trinity-steelindo/ui/organisms';
import ImgTrinsLogo from './assets/icon-logo-trins.png';

export default function App() {
  return <Header companyLogoImg={ImgTrinsLogo} />;
}
