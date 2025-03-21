'use client';
import { ReactElement } from 'react';
import { Search, X } from 'lucide-react';

type SearchBarProps = {
  searchTerm: string;
  onSearch: (query: string) => void;
};

export const SearchBar = ({ searchTerm, onSearch }: SearchBarProps): ReactElement => {
  return (
    <div className="w-full sm:w-auto relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />

      <input
        type="text"
        placeholder="Buscar filme..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className="border border-gray-300 rounded pl-10 pr-10 py-2 font-rubik text-black w-full sm:w-[250px] focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {searchTerm && (
        <button
          onClick={() => onSearch('')}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black"
          aria-label="Limpar busca"
        >
          <X size={20} className=' ' />
        </button>
      )}
    </div>
  );
};
