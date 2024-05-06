import React, {useEffect, useState} from 'react';
import './index.css';
import {Body, Header} from '@trinity-steelindo/ui/organisms';
import SplashScreen from './components/splash-screen';
import {Carousel} from '@material-tailwind/react';
import {image} from './components/data/image';
import {
  IconLogoTrinityTrans,
  IconLogoTrinityWhiteTrans,
} from '@trinity-steelindo/assets/index';
import {products} from './components/data/product';

export default function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showsOnce, setShownOnce] = useState(false);

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

  const innerHeightScrollPosition = Math.min(
    scrollPosition / window.innerHeight,
    1,
  );

  useEffect(() => {
    if (innerHeightScrollPosition > 0) {
      setShownOnce(true);
    }
  }, [showsOnce, innerHeightScrollPosition]);

  const listOfImageCarousel = image.map((value) => (
    <img
      src={value.image}
      className="h-full w-full bg-center object-cover"></img>
  ));

  const listOfMainProductsDesktopViews = products.map((value, index) => {
    return (
      <div className="relative w-full p-5" key={index}>
        <div className="flex h-3/4 overflow-hidden rounded-md bg-colorCard bg-cover bg-no-repeat shadow-md">
          <div
            className={`${index % 2 === 0 ? 'order-2 text-left' : 'order-1 text-right'} w-1/2 p-5 align-middle font-helios-condensed`}>
            <h1
              className={`text-shadow text-4xl font-bold uppercase text-white`}>
              {value.title}
            </h1>
            <p className={`text-shadow mt-3 text-white`}>{value.description}</p>
            <div
              className={`-bottom-px h-2 ${index % 2 === 0 ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} mt-5 from-colorWhite via-transparent to-transparent`}></div>
          </div>
          <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'} w-1/2`}>
            <div
              style={{
                backgroundImage: `url(${value.image})`,
              }}
              className="bg-resize-custom h-full w-full rounded-xl bg-no-repeat"
            />
          </div>
        </div>
      </div>
    );
  });

  const listOfMainProductsMobileViews = products.map((value) => {
    return (
      <div
        className="group relative m-2 transform overflow-hidden rounded-xl  bg-center transition-transform duration-300 hover:scale-110"
        style={{backgroundImage: `url(${value.image})`}}>
        <div className="h-52 overflow-hidden rounded-t-xl">
          <div className="absolute inset-x-0 bottom-0 flex items-start justify-start p-5 align-bottom opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="font-helios-condensed text-xl font-bold text-white">
              {value.title}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      {loading ? (
        <SplashScreen />
      ) : (
        <div className="relative flex h-full w-full flex-col overflow-auto bg-colorPrimary">
          {/* Mobile Version */}
          <div className="display-background-mobile relative h-screen w-full overflow-hidden bg-IconTrinityTruckSecondFull bg-cover bg-center bg-no-repeat">
            {/* Gradient Top */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-colorPrimary" />
            {/* Curtain Shadows */}
            <div className="absolute inset-0 bg-colorPrimary bg-opacity-40" />
            <div className="group-textbox absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center pb-5">
              {/* Responsive font size */}
              <h1 className="trinity-title-text whitespace-pre-line text-center font-helios-condensed font-bold text-white">
                We Are Ready{'\n'}To Satisfy Your Needs
              </h1>
              {/* Responsive text */}
            </div>
          </div>

          {/* Desktop and Tablet Version bg-IconTrinityTruckSecond*/}
          <div className="bg-IconTrinityTruckSecond display-background-desktop relative hidden h-screen w-full bg-cover bg-center bg-no-repeat sm:block">
            {/* Gradient Top */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-colorPrimary" />
            {/* Curtain Shadows */}
            <div className="absolute inset-0 bg-colorPrimary bg-opacity-30" />
            <div className="group-textbox bottom-0 left-0 flex flex-col items-center px-10 sm:hidden md:absolute md:bottom-0 md:right-0 md:flex md:items-start md:px-10">
              {/* Responsive font size */}
              <h1 className="trinity-title-text whitespace-pre-line pb-5 font-helios-condensed font-bold text-white">
                We Are Ready{'\n'}To Satisfy Your Needs
              </h1>
              {/* Responsive text */}
              <h3 className="mb-10 hidden whitespace-pre-line text-justify font-helios-condensed text-xl text-white md:mb-5 md:flex md:text-xl lg:pb-10 lg:text-xl xl:pb-10 xl:text-2xl">
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
            headerOpacity={innerHeightScrollPosition}
            logoBlack={IconLogoTrinityTrans}
            logoWhite={IconLogoTrinityWhiteTrans}
          />
          <Body>
            <div
              className={`flex flex-col items-center justify-center text-xl sm:block`}>
              <div className="w-full overflow-hidden whitespace-nowrap  text-center">
                <h1
                  className={`${
                    showsOnce ? 'fill-text-title' : 'hidden'
                  } overflow-hidden pb-5 font-helios-condensed text-4xl text-colorTitle`}>
                  WHO WE ARE
                </h1>
              </div>
              <div
                className={`${
                  showsOnce ? 'description-animation' : 'hidden'
                } w-full items-center justify-center  pb-5`}>
                <h6 className="mb-8 w-full scale-100 transform text-center font-helios-condensed text-white transition-transform sm:mb-0">
                  Upgrade your roofing needs with UPVC roofing products from us.
                  These products provide durability and aesthetic appeal,
                  ensuring that your projects are built to last. Join us as we
                  offer innovation, reliability, and top-notch customer
                  satisfaction in every product we provide.
                </h6>
              </div>
              <div
                className={`flex flex-col items-center justify-center  text-xl text-colorDescription`}>
                <div
                  className={`flex flex-col ${
                    showsOnce ? 'daily-activity-animation' : 'hidden'
                  } items-center rounded pb-5 text-center`}>
                  <h2 className="relative pb-5 font-helios-condensed text-2xl font-semibold">
                    Our Activities
                    <div className="-bottom-px h-1 bg-gradient-to-r from-colorDescription via-transparent to-transparent"></div>
                  </h2>
                  <Carousel
                    transition={{duration: 2}}
                    className="h-48 w-full items-center rounded-md sm:w-1/2 xl:h-96"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}>
                    {listOfImageCarousel}
                  </Carousel>
                </div>
                <div
                  className={`${
                    showsOnce ? 'founder-text-title' : 'hidden'
                  } flex items-center justify-center pb-5 text-center text-sm font-extralight`}>
                  Trinity SteelIndo
                </div>
              </div>
            </div>
          </Body>
          <div className="hidden h-full w-full flex-col overflow-y-auto bg-colorPrimary px-5 py-5 lg:flex xl:flex">
            {listOfMainProductsDesktopViews}
          </div>
          <div className="mobile-tablet-views gap-5 bg-colorPrimary p-8 lg:hidden xl:hidden">
            {listOfMainProductsMobileViews}
          </div>
        </div>
      )}
    </>
  );
}
