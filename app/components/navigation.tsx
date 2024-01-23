'use client';
import React from 'react';
import { useState, useEffect } from 'react';

export default function navigation() {
  const pathName = window.location.pathname;
  const [hideDiv, setHideDiv] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const checkActiveMenu = () => {
    var pathName = window.location.pathname;
    console.log('Pathname: ' + pathName);
    if (pathName.includes('product')) {
      return 'products';
    }

    if (pathName.includes('contact')) {
      return 'contact';
    }

    if (pathName.includes('account')) {
      return 'account';
    }

    if (pathName.includes('cart') || pathName.includes('checkout')) {
      return 'cart';
    }

    if (pathName.includes('/')) {
      return 'home';
    }
  };

  return (
    <header>
      <nav className='flex p-4 items-center w-full'>
        <a href='/' className='p-2 mr-4 inline-flex items-center'>
          <img src='/logo3.png' alt='Logo' width={200} height={50} />
        </a>
        <button
          className='text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler'
          data-target='#navigation'
        >
          <i className='material-icons'>menu</i>
        </button>
        <div
          className='hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto text-xl'
          id='navigation'
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto gap-10'>
            <a
              href='/'
              className={` items-center justify-center hover:text-orange-600 transition-colors duration-500 text-lg font-semibold ${
                checkActiveMenu() === 'home'
                  ? 'text-orange-600'
                  : 'text-gray-400'
              }`}
            >
              <span>Home</span>
            </a>
            <a
              href='/pages/products?category=All'
              className={`items-center justify-center hover:text-orange-600 transition-colors duration-500 text-lg font-semibold ${
                checkActiveMenu() === 'products'
                  ? 'text-orange-600'
                  : 'text-gray-400'
              }`}
            >
              <span>Products</span>
            </a>
            <a
              href='#'
              className={`items-center justify-center hover:text-orange-600 transition-colors duration-500 text-lg font-semibold ${
                checkActiveMenu() === 'contact'
                  ? 'text-orange-600'
                  : 'text-gray-400'
              }`}
            >
              <span>Contact Us</span>
            </a>
            <a
              href='/pages/cart'
              className={`items-center justify-center hover:text-orange-600 transition-colors duration-500 text-lg font-semibold relative ${
                checkActiveMenu() === 'cart'
                  ? 'text-orange-600'
                  : 'text-gray-400'
              }`}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-8 h-8 text-gray-400'
              >
                <path d='M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z' />
              </svg>
              <div className='bg-orange-600 text-white text-xs rounded-2xl w-6 h-6 text-center p-1 absolute top-4 left-4'>
                {cartCount}
              </div>
            </a>
            <a
              href='/pages/account'
              className={`items-center justify-center hover:text-orange-600 transition-colors duration-500 text-lg font-semibold relative; ${
                checkActiveMenu() === 'account'
                  ? 'text-orange-600'
                  : 'text-gray-400'
              }`}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-8 h-8'
              >
                <path
                  fillRule='evenodd'
                  d='M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
                  clipRule='evenodd'
                />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
