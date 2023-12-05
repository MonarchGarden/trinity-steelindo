import React, {PropsWithChildren} from 'react';
import {BackgroundContainer, CompanyLogo} from '../../atoms';
import './style.css';

type Props = PropsWithChildren & {
  backgroundLogoImg: string;
};

export const Navbar = () => {
  return (
    <nav className="flex space-x-4">
      <a href="#" className="text-white">
        Home
      </a>
      <a href="#" className="text-white">
        About
      </a>
      <a href="#" className="text-white">
        Services
      </a>
      <a href="#" className="text-white">
        Contact
      </a>
    </nav>
  );
};
