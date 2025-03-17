'use client';

import { ReactElement } from 'react';
import { Navbar } from './Navbar';

export const Header = (): ReactElement => {
  return (
    <header className=" bg-white py-4 px-6 flex flex-row  gap-[6rem] items-center">
      <h1 className="text-[72px] font-bold font-playfair text-black">Cinefilia</h1>
      <Navbar />
      <div className='border border-t-2 border-gray-300'/>
    </header>
  );
};
