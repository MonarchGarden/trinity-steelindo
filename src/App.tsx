import React, {useEffect, useState} from 'react';
import './index.css';
import {Body, Header} from '@trinity-steelindo/ui/organisms';
import {
  IconLogoTrinityTrans,
  IconLogoTrinityWhiteTrans,
  IconTrinityFactory,
  TruckTrinityPng,
} from './assets';
import SplashScreen from './components/splash-screen';

export default function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setLoading(false);
    };

    fetchData();
  }, []);

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
    <>
      {loading ? (
        <SplashScreen />
      ) : (
        <div className="relative flex h-screen w-screen flex-col overflow-x-hidden bg-colorPrimary">
          {/* Mobile Version */}
          <div className="relative h-screen w-full overflow-hidden bg-IconTrinityTruckSecondFull bg-cover bg-center sm:hidden">
            {/* Gradient Top */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-colorPrimary" />
            {/* Curtain Shadows */}
            <div className="absolute inset-0 bg-colorPrimary bg-opacity-40" />
            <div className="group-textbox absolute bottom-0 left-0 right-0 flex flex-col justify-center pb-5">
              {/* Responsive font size */}
              <h1 className="trinity-title-text whitespace-pre-line text-center text-4xl font-bold text-white sm:text-lg">
                We Are Ready{'\n'}To Satisfy Your Needs
              </h1>
              {/* Responsive text */}
            </div>
          </div>
          {/*TestAgain */}
          {/* Desktop and Tablet Version */}
          <div className="relative hidden sm:block">
            <img src={TruckTrinityPng} className="h-full w-full object-cover" />
            {/* Gradient Top */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-colorPrimary" />
            {/* Curtain Shadows */}
            <div className="absolute inset-0 bg-colorPrimary bg-opacity-30" />
            <div className="group-textbox bottom-0 left-0 flex flex-col items-center px-10 sm:hidden md:absolute md:bottom-0 md:right-0 md:flex md:items-start md:px-10">
              {/* Responsive font size */}
              <h1 className="hidden whitespace-pre-line pb-5 text-2xl font-bold text-white sm:block md:pb-5 md:text-left md:text-3xl lg:text-5xl xl:text-6xl">
                We Are Ready{'\n'}To Satisfy Your Needs
              </h1>
              {/* Responsive text */}
              <h3 className="mb-10 hidden whitespace-pre-line text-justify text-xl text-white md:mb-5 md:flex md:text-xl lg:pb-10 lg:text-xl xl:pb-10 xl:text-2xl">
                Trinity Steelindo is a trusted destination for high-quality
                steel and UPVC roofing products.
                {'\n'}We are committed to excellence and offer a wide range of
                steel products {'\n'}to meet the diverse needs of the industrial
                and construction sectors.
              </h3>
            </div>
          </div>
          {/* Header and Body components */}
          <Header
            headerOpacity={headerOpacity}
            logoBlack={IconLogoTrinityTrans}
            logoWhite={IconLogoTrinityWhiteTrans}
          />
          <Body>
            <div className="rounded-md bg-gray-200 p-6 px-10 shadow-md">
              <img
                src={IconTrinityFactory}
                className="h-full w-full rounded-md bg-fixed object-cover"
              />
            </div>
          </Body>
        </div>
      )}
    </>
  );
}
