import React from 'react';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  return (
    <header className="py-4 px-6 md:px-12 shadow-sm bg-white">
      <div className="container mx-auto">
        <div className="flex items-center">
        <img
  src={logo}
  alt="Speedy Quote Auto"
  className="
    h-10 w-auto
    scale-[4.5]
    -translate-x-4 md:-translate-x-8
    origin-left
    object-contain
  "
/>

        </div>
      </div>
    </header>
  );
};

export default Header;
