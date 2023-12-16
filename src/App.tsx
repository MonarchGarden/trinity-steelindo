import React, {useEffect, useState} from 'react';
import './index.css';
import {Body, Header} from '@trinity-steelindo/ui/organisms';
import {
  IconLogoTrinityTrans,
  IconLogoTrinityWhiteTrans,
  IconTrinityFactory,
  TruckTrinityPng,
} from './assets';

export default function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerOpacity = Math.min(
    scrollPosition / (0.25 * window.innerWidth),
    1,
  );

  return (
    // Cover Background with color image and max width screen
    <div className="max-w-screen relative flex h-screen flex-col scroll-smooth bg-colorBackground">
      <div className="relative border-8 border-black">
        {/* ImageShadows */}
        <img src={TruckTrinityPng} className="h-full w-full bg-fixed" />
        {/* Gradient Top */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-colorPrimary" />
        {/* Curtain Shadows */}
        <div className="absolute inset-0 bg-colorPrimary bg-opacity-30" />
        <div className="group-textbox bottom-0 left-0 flex flex-col items-center px-10 sm:hidden md:absolute md:bottom-0 md:right-0 md:flex md:items-start md:px-10">
          {/* Responsive font size */}
          <h1 className="mb-10 hidden whitespace-pre-line text-center text-2xl font-bold text-white sm:block md:mb-10 md:text-left md:text-4xl lg:text-5xl xl:text-6xl">
            We Are Ready{'\n'}To Satisfy Your Needs
          </h1>

          {/* Responsive text */}
          <h3 className="mb-10 hidden whitespace-pre-line text-xl text-white md:flex md:text-lg lg:text-xl xl:text-2xl">
            Trinity Steelindo is a trusted destination for high-quality steel
            and UPVC roofing products.{'\n'}We are committed to excellence and
            offer a wide range of steel products {'\n'}to meet the diverse needs{' '}
            of the industrial and construction sectors.
          </h3>
        </div>
      </div>
      <Header
        logoBlack={IconLogoTrinityTrans}
        logoWhite={IconLogoTrinityWhiteTrans}
        headerOpacity={headerOpacity}
      />
      <Body>
        <div className="rounded-md bg-gray-200 p-6 px-10 shadow-md">
          <img
            src={IconTrinityFactory}
            className="h-full w-full rounded-md bg-fixed object-cover"
          />
          <h1 className="mb-4 text-3xl font-bold">
            Hello, React with Tailwind CSS!
          </h1>
          <p className="text-gray-700">
            This is a basic React component styled with Tailwind CSS.
          </p>
        </div>
      </Body>
    </div>
  );
}
