import React, {useEffect, useState} from 'react';
import './index.css';
import {Body, Header} from '@trinity-steelindo/ui/organisms';
import {
  IconLogoTrinityTrans,
  IconLogoTrinityWhiteTrans,
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

  console.log(`Test : ${scrollPosition} +  ${window.innerWidth}`);

  const headerOpacity = Math.min(
    scrollPosition / (0.25 * window.innerWidth),
    1,
  );

  return (
    <>
      {loading ? (
        <SplashScreen />
      ) : (
        <div className="relative flex h-full w-full flex-col overflow-hidden bg-colorPrimary">
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
            <div className={`flex flex-col items-center`}>
              <div className="overflow-hidden whitespace-nowrap">
                <h1
                  className={`${
                    headerOpacity > 0.6 || window.innerWidth > 750
                      ? 'fill-text-title'
                      : ''
                  } text-colorTitle overflow-hidden font-serif text-4xl`}>
                  {headerOpacity > 0.6 || window.innerWidth > 750
                    ? 'WHO WE ARE'
                    : ''}
                </h1>
              </div>
              <div
                className={`${
                  headerOpacity > 0.6 || window.innerWidth > 750
                    ? 'text-colorDescription'
                    : ''
                } description-animation text-center text-xl sm:block`}>
                <div className="flex flex-col py-10 sm:flex-row">
                  <h6 className="mb-8 w-full scale-100 transform text-start transition-transform sm:mb-0 sm:w-1/2">
                    {headerOpacity > 0.6 || window.innerWidth > 750
                      ? 'Upgrade your roofing needs with UPVC roofing products from us. These products provide durability and aesthetic appeal, ensuring that your projects are built to last. Join us as we offer innovation, reliability, and top-notch customer satisfaction in every product we provide.'
                      : ''}
                  </h6>
                  <div className="w-full sm:w-10"></div>
                  <h6 className="w-full scale-100 transform text-start transition-transform sm:w-1/2">
                    {headerOpacity > 0.6 || window.innerWidth > 750
                      ? 'Feel free to get in touch with us if you have any further questions. We look forward to assisting you in choosing the right UPVC roofing products for your project.'
                      : ''}
                  </h6>
                </div>
                <div className="text-sm font-extralight">
                  {headerOpacity > 0.6 || window.innerWidth > 750
                    ? 'Brian, Dio, Wandi. Founders. Trinity SteelIndo'
                    : ''}
                </div>
              </div>
            </div>
          </Body>
        </div>
      )}
    </>
  );
}
