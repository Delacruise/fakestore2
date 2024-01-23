import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function footer() {
  return (
    <footer className='absolute bottom-0 left-0 right-0'>
      <div className='flex w-full p-4 text-center text-white text-3xl  gap-10 justify-between'>
        <div className='w-1/4 p-4'>
          <img src='/logo2.png' alt='Logo' width={150} height={150} />
        </div>
        <div className='w-1/4 p-4'>
          <p className='font-bold uppercase text-lg text-left mb-2 text-gray-600 '>
            Quick Links
          </p>
          <p className='text-gray-500 font-normal text-lg text-left hover:text-orange-600 transition-colors duration-500 cursor-pointer pb-2'>
            Your Account
          </p>
          <p className='text-gray-500 font-normal text-lg text-left hover:text-orange-600 transition-colors duration-500 cursor-pointer pb-2'>
            Your Orders
          </p>
          <p className='text-gray-500 font-normal text-lg text-left hover:text-orange-600 transition-colors duration-500 cursor-pointer pb-2'>
            Your Address
          </p>
          <p className='text-gray-500 font-normal text-lg text-left hover:text-orange-600 transition-colors duration-500 cursor-pointer pb-2'>
            Your Wishlist
          </p>
        </div>
        <div className='w-1/4 p-4'>
          <p className='font-bold uppercase text-lg text-left mb-2 text-gray-600'>
            important links
          </p>
          <p className='text-gray-500 font-normal text-lg text-left hover:text-orange-600 transition-colors duration-500 cursor-pointer pb-2'>
            Help
          </p>
          <p className='text-gray-500 font-normal text-lg text-left hover:text-orange-600 transition-colors duration-500 cursor-pointer pb-2'>
            Terms & Conditions
          </p>
          <p className='text-gray-500 font-normal text-lg text-left hover:text-orange-600 transition-colors duration-500 cursor-pointer pb-2'>
            Shipping & Delivery
          </p>
          <p className='text-gray-500 font-normal text-lg text-left hover:text-orange-600 transition-colors duration-500 cursor-pointer pb-2'>
            Return Policy
          </p>
        </div>
        <div className='w-1/4 p-4'>
          <p className='font-bold uppercase text-lg text-left mb-2 text-gray-600'>
            Get in touch
          </p>
          <p className='text-gray-400 font-normal text-lg text-left'>
            Some important in formation about getting touch with the owners of
            this fake one line business
          </p>
        </div>
      </div>

      <div className='flex gap-2 mx-auto m-10 w-full justify-center'>
        <div className='icon'>
          <SocialIcon fallback='facebook' bgColor='#333' fgColor='#fff' />
        </div>
        <div className='text-white rounded-md text-xl'>
          <SocialIcon fallback='twitter' bgColor='#333' fgColor='#fff' />
        </div>
        <div className='text-white rounded-md text-xl'>
          <SocialIcon fallback='tiktok' bgColor='#333' fgColor='#fff' />
        </div>
        <div className='text-white rounded-md text-xl'>
          <SocialIcon fallback='youtube' bgColor='#333' fgColor='#fff' />
        </div>
      </div>
    </footer>
  );
}
