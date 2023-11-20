import React, {useState, PropsWithChildren} from 'react';
import {NavbarBackground} from '@trinity-steelindo/ui/molecules';
import './style.css';
import {CompanyLogo} from '@trinity-steelindo/ui/atoms';

type Props = PropsWithChildren & {
  iconMenuOpen: React.ReactNode;
  iconMenuClose: React.ReactNode;
};

export const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'features',
    title: 'Features',
  },
  {
    id: 'product',
    title: 'Product',
  },
  {
    id: 'clients',
    title: 'Clients',
  },
];

export const Header = ({iconMenuClose, iconMenuOpen}: Props) => {
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);

  return (
    <NavbarBackground>
      <nav className="navbar flex w-full items-center justify-between py-6">
        {/* Logo */}
        <CompanyLogo />

        {/* Desktop Navigation */}
        <ul className="hidden flex-1 list-none items-center justify-end sm:flex">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins cursor-pointer text-[16px] font-normal ${
                active === nav.title ? 'text-white' : 'text-dimWhite'
              } ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="flex flex-1 items-center justify-end sm:hidden">
          {toggle ? iconMenuOpen : iconMenuClose}

          {/* Sidebar */}
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } sidebar absolute right-0 top-20 mx-4 my-2 min-w-[140px] rounded-xl bg-black p-6`}>
            <ul className="flex flex-1 list-none flex-col items-start justify-end">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins cursor-pointer text-[16px] font-medium ${
                    active === nav.title ? 'text-white' : 'text-dimWhite'
                  } ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                  onClick={() => setActive(nav.title)}>
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </NavbarBackground>
  );
};
