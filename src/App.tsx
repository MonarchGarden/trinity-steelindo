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
      <div className="relative">
        {/* ImageShadows */}
        <img src={TruckTrinityPng} className="h-full w-full bg-fixed" />
        {/* Gradient Top */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-colorPrimary" />
        {/* Curtain Shadows */}
        <div className="absolute inset-0 bg-colorPrimary bg-opacity-30" />
        <div className="absolute bottom-0 left-0 flex transform flex-col items-center px-10 sm:bottom-0 sm:right-0 sm:items-center sm:px-10 md:bottom-0 md:left-0 md:items-start md:px-10">
          <h1 className="mb-10 text-xl font-bold text-white sm:whitespace-pre-line sm:text-center sm:text-4xl md:whitespace-pre-line md:text-left md:text-5xl">
            We Are Ready{'\n'}To Satisfy Your Needs
          </h1>
          <h3 className="mb-10 hidden whitespace-pre-line text-xl text-white md:flex">
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
