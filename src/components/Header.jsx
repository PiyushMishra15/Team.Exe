'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from './Navbar'; // Import Navbar component

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-white w-full py-4 flex items-center justify-between px-6 relative z-20 bg-transparent">
      <div className="flex items-center">
        <img src="/favicon.ico" alt="Logo" className="h-10 w-10 mr-3" />
       
      </div>
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} /> {/* Include Navbar component */}
    </header>
  );
}

export default Header;