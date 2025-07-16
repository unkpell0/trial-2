import React from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    className="text-neutral-300 hover:gradient-text font-medium transition-all duration-300"
  >
    {children}
  </a>
);

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#1a1a2e]/80 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold">
          <span className="gradient-text">Bird</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#expertise">Expertise</NavLink>
          <NavLink href="#approach">Approach</NavLink>
           <NavLink href="#process">Process</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink>
        </nav>
        <a 
          href="#contact" 
          className="hidden md:inline-flex items-center gap-2 gradient-bg text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-300"
        >
          <span>Get in Touch</span>
          <ArrowRightIcon className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
};

export default Header;