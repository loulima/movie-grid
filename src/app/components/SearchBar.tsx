"use client";
import { ReactElement } from "react";

type SearchBarProps = {
  searchTerm: string;
  onSearch: (query: string) => void;
};

export const SearchBar = ({ searchTerm, onSearch }: SearchBarProps): ReactElement => {
  return (
    <div className="w-full sm:w-auto">
      <input
        type="text"
        placeholder="Buscar filme..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 font-rubik text-black w-full sm:w-[250px] focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};
