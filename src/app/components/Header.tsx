'use client';

import { ReactElement } from "react";
import { Navbar } from "./Navbar";

export const Header = (): ReactElement => {
  return (
    <header className="bg-white py-4 px-6 flex flex-col md:flex-row gap-6 md:gap-[4rem] items-center justify-between">
      <h1 className="text-[48px] sm:text-[56px] md:text-[72px] font-bold font-playfair text-black">
        Cinefilia
      </h1>
      <Navbar />
    </header>
  );
};
