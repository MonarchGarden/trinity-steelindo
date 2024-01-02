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
    scrollPosition / (0.25 * window.innerHeight),
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

  const listOfMainProductsDesktopViews = products.map((value) => {
    return (
      <>
        <div className="m-5 w-full">
          <h1 className="text-2xl font-bold text-white">{value.title}</h1>
          <div className="-bottom-px h-1 w-1/2 bg-gradient-to-r from-white via-transparent to-transparent"></div>
        </div>
        <div className="overflow-hidden rounded-md bg-white shadow-md">
          <div className="flex">
            <div className="mx-auto my-auto w-3/4 p-4">
              <table className="w-full table-auto border border-colorDescription">
                <thead className="my-5 bg-colorBackground font-bold text-white">
                  <tr className="text-center text-sm uppercase">
                    <th className="border-r border-colorDescription px-2 py-1 ">
                      No
                    </th>
                    <th className="border-r border-colorDescription px-2 py-1 ">
                      Deskripsi
                    </th>
                    <th className="border-r border-colorDescription px-2 py-1 ">
                      Berat
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {value.steelFormDescription.map((desc, descIndex) => (
                    <tr className="m-5" key={descIndex}>
                      <td className="border-b border-r border-colorDescription px-2 py-1 text-center font-bold">
                        {desc.id + 1}.
                      </td>
                      <td className="border-b border-r border-colorDescription px-2 py-1 text-start font-bold">
                        {desc.name}
                      </td>
                      <td className="border-b border-r border-colorDescription px-2 py-1 text-center font-bold">
                        {desc.weight}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex w-1/4 items-center overflow-hidden rounded">
              <img
                src={value.image}
                className="h-auto w-full overflow-hidden rounded px-5 py-5"
              />
            </div>
          </div>
        </div>
      </>
    );
  });

  const listOfMainProductsMobileViews = products.map((value) => {
    return (
      <div className="mx-auto flex h-full w-full flex-col overflow-hidden rounded-xl  bg-white">
        <div className="h-52 overflow-hidden rounded-t-xl">
          <div
            style={{backgroundImage: `url(${value.image})`}}
            className="h-full w-full bg-cover bg-center"
          />
        </div>
        <div className="h-auto p-5">
          <div className="mb-2 text-xl font-bold">{value.title}</div>
          <h3 className="overflow-hidden text-gray-700">
            Ini baja ringan, material tidak tertandingi. Berkualitas tapi rapuh.
            Makanya jangan beli banyak banyak. Nanti rugi.{'\n'}Mending ga usah
            beli, mending mati aja.
          </h3>
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

          {/* Desktop and Tablet Version bg-IconTrinityTruckSecond*/}
          <div className="bg-IconTrinityTruckSecond relative hidden h-screen w-full bg-cover bg-center bg-no-repeat sm:block">
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
            headerOpacity={innerHeightScrollPosition}
            logoBlack={IconLogoTrinityTrans}
            logoWhite={IconLogoTrinityWhiteTrans}
          />
          <Body>
            <div className={`block`}>
              <div className="w-full overflow-hidden whitespace-nowrap text-center">
                <h1
                  className={`${
                    showsOnce ? 'fill-text-title' : 'hidden'
                  } overflow-hidden pb-5 font-serif text-4xl text-colorTitle`}>
                  WHO WE ARE
                </h1>
              </div>
              <div className={`block text-xl text-colorDescription sm:block`}>
                <div
                  className={`${
                    showsOnce ? 'description-animation' : 'hidden'
                  } flex flex-col pb-5 sm:flex-row`}>
                  <h6 className="mb-8 w-full scale-100 transform text-justify transition-transform sm:mb-0 sm:w-1/2">
                    Upgrade your roofing needs with UPVC roofing products from
                    us. These products provide durability and aesthetic appeal,
                    ensuring that your projects are built to last. Join us as we
                    offer innovation, reliability, and top-notch customer
                    satisfaction in every product we provide.
                  </h6>
                  <div className="w-full sm:w-10"></div>
                  <h6 className="w-full scale-100 transform text-justify transition-transform sm:w-1/2">
                    Feel free to get in touch with us if you have any further
                    questions. We look forward to assisting you in choosing the
                    right UPVC roofing products for your project.
                  </h6>
                </div>
                <div
                  className={`flex flex-col ${
                    showsOnce ? 'daily-activity-animation' : 'hidden'
                  } items-center rounded pb-5 text-center`}>
                  <h2 className="relative pb-5 text-2xl font-semibold ">
                    Our Activites
                    <div className="-bottom-px h-1 bg-gradient-to-r from-colorDescription via-transparent to-transparent"></div>
                  </h2>
                  <Carousel
                    transition={{duration: 2}}
                    className="h-48 w-full items-center rounded-xl sm:w-1/2 xl:h-96">
                    {listOfImageCarousel}
                  </Carousel>
                </div>
                <div
                  className={`${
                    showsOnce ? 'founder-text-title' : 'hidden'
                  } flex items-center justify-center pb-5 text-center text-sm font-extralight`}>
                  Brian, Dio, Wandi. Founders. Trinity SteelIndo
                </div>
              </div>
            </div>
          </Body>
          <div className="hidden h-full w-full flex-col bg-colorPrimary px-5 py-5 lg:flex xl:flex">
            {listOfMainProductsDesktopViews}
          </div>
          <div className="grid h-full w-full grid-flow-row gap-5 gap-x-5 bg-colorPrimary p-8 lg:hidden xl:hidden">
            {listOfMainProductsMobileViews}
          </div>
        </div>
      )}
    </>
  );
}
