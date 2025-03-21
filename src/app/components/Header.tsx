'use client';
import { ReactElement } from 'react';
import { Navbar } from './Navbar';
import { useSearch } from '@/context/SearchContext';
import { SearchBar } from './SearchBar';

export const Header = (): ReactElement => {
  const { searchTerm, setSearchTerm } = useSearch();

  return (
    <header className="bg-white py-4 px-6 flex flex-wrap items-center justify-between gap-4">
      <h1 className="text-[40px] sm:text-[72px] font-bold font-playfair text-black order-2 md:order-1">Cinefilia</h1>

      <div className="order-1 md:order-2 w-full sm:w-auto">
        <Navbar />
      </div>

      <div className="w-full sm:w-auto order-3">
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      </div>
    </header>
  );
};
