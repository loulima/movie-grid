'use client';
import { ReactElement } from 'react';
import { Navbar } from './Navbar';
import { useSearch } from "@/context/SearchContext";

export const Header = (): ReactElement => {
  const { searchTerm, setSearchTerm } = useSearch();

  return (
    <header className="bg-white py-4 px-6 flex flex-col sm:flex-row items-center justify-between">
      <h1 className="text-[40px] sm:text-[72px] font-bold font-playfair text-black">Cinefilia</h1>
      <div className="flex gap-4 items-center">
        <Navbar />
        <input
          type="text"
          placeholder="Buscar filme..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 text-black rounded px-4 py-2 font-rubik w-full sm:w-[250px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </header>
  );
};
