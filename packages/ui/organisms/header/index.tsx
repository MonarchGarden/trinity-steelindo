import React, {PropsWithChildren} from 'react';
import './style.css';
import {Navbar} from '@trinity-steelindo/ui/template/header-nav';

type Props = PropsWithChildren & {
  companyLogoImg: string;
};
//TODO as of now everything is hardcoded
export const Header = ({children, companyLogoImg}: Props) => {
  return (
    <div>
      <header className="fixed left-0 right-0 top-0 flex bg-colorPrimary p-2">
        <div className=" sm:w-1/5">
          <div className="flex flex-col items-center p-2 sm:flex-row xl:items-center">
            <img
              src={companyLogoImg}
              className="header-logo w-30 h-20 transform-gpu rounded-full  transition-transform duration-300 ease-in-out"
            />
            <div className="ms-2 mt-2 hidden w-24 transform font-serif font-bold text-white transition-transform duration-300 ease-in-out sm:block">
              <h1>Trinity SteelIndo</h1>
            </div>
          </div>
        </div>
        <nav className="ml-auto">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <a
                      href="/"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">
                      Home
                    </a>
                    <a
                      href="/features"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">
                      Features
                    </a>
                    <a
                      href="/product"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">
                      Product
                    </a>
                    <a
                      href="/clients"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">
                      Clients
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="ml-auto">{children}</div>
      </header>
    </div>
  );
};
