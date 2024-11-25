import React, {useState, useEffect} from 'react';
import './style.css';
import {NavButtonLink} from '@trinity-steelindo/ui/atoms';
import {motion} from 'framer-motion';

type NavLink = {
  path: string;
  label: string;
};

type Props = {
  logoWhite: string;
  logoBlack: string;
  navLinks: NavLink[];
};

export const Header = ({logoWhite, logoBlack, navLinks}: Props) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(Math.min(window.scrollY, 200));
    };

    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  const menuVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  const linkVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    },
  };

  const headerOpacity = scrollPosition / 200;
  const isScrolled = headerOpacity > 0.2;

  return (
    <header
      className={`fixed top-0 z-50 w-full p-3 transition-all duration-700 ease-linear ${
        isMobileMenuOpen || isHovered
          ? 'bg-white bg-opacity-65 shadow-md'
          : isScrolled
            ? `bg-white bg-opacity-65 shadow-md`
            : 'bg-transparent'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={
              isScrolled || isHovered || isMobileMenuOpen
                ? logoWhite
                : logoBlack
            }
            className="h-12 w-12 transition-opacity duration-700"
            alt={`${isScrolled || isHovered || isMobileMenuOpen ? 'Black Logo' : 'White Logo'}`}
          />
          <span
            className={`ml-3 text-xl font-bold transition-colors duration-700 ${
              isScrolled || isHovered || isMobileMenuOpen
                ? 'text-black'
                : 'text-white'
            }`}>
            PT. TRINITY STEELINDO
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-4 md:flex">
          {navLinks.map((link, index) => (
            <NavButtonLink
              key={index}
              navBarTitle={link.label}
              path={link.path}
              isHeaderHovered={isHovered || isMobileMenuOpen}
              headerOpacity={headerOpacity}
            />
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`block p-2 ${isScrolled || isHovered || isMobileMenuOpen ? 'text-black' : 'text-white'}  md:hidden`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu">
          {isMobileMenuOpen ? (
            // Close Icon SVG
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Menu SVG
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className="absolute left-0 right-0 top-full transform bg-white bg-opacity-65 shadow-md"
        initial="closed"
        animate={isMobileMenuOpen ? 'open' : 'closed'}
        variants={menuVariants}>
        <ul className="space-y-4 p-4">
          {navLinks.map((link, index) => (
            <motion.li key={index} variants={linkVariants}>
              <NavButtonLink
                navBarTitle={link.label}
                path={link.path}
                isHeaderHovered={true}
                headerOpacity={1}
              />
            </motion.li>
          ))}
        </ul>
      </motion.div>
      {/* <div
        className={`absolute left-0 right-0 top-full transform bg-white bg-opacity-65 shadow-md transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
        <ul className="space-y-4 p-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavButtonLink
                navBarTitle={link.label}
                path={link.path}
                isHeaderHovered={true}
                headerOpacity={headerOpacity}
              />
            </li>
          ))}
        </ul>
      </div> */}
    </header>
  );
};
