'use client';

import { useState } from 'react';
import Link from 'next/link';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
      {/* Botón del menú hamburguesa */}
      <button
        onClick={toggleMenu}
        className='absolute top-0 right-0 bg-pink px-3 py-4 z-30'>
        <div className='w-6 h-0.5 bg-white mb-1'></div>
        <div className='w-6 h-0.5 bg-white mb-1'></div>
        <div className='w-6 h-0.5 bg-white'></div>
      </button>

      {/* Menú desplegable */}
      {isOpen && (
        <div className='absolute top-8 right-0 mt-2 w-full md:w-48 bg-pink text-white text-xl md:text-lg shadow-lg p-4 z-30'>
          <ul>
            <li className='mb-3'>
              <Link
                onClick={toggleMenu}
                href='#'
                className='hover:text-gray-200'>
                News
              </Link>
            </li>
            <li className='mb-3'>
              <Link
                onClick={toggleMenu}
                href='#'
                className='hover:text-gray-200'>
                CV
              </Link>
            </li>
            <li className='mb-3'>
              <Link
                onClick={toggleMenu}
                href='#'
                className='hover:text-gray-200'>
                Projects
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                href='/sobre-nosotros'
                className='hover:text-gray-200'>
                About Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
