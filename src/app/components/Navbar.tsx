'use client';

import { useState, ReactElement } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
export const Navbar = (): ReactElement => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full font-archivo text-black p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-black text-3xl md:hidden"
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        <ul className="hidden md:flex gap-6 text-black text-lg font-semibold font-archivo">
          <li>
            <Link href="/" className="hover:text-gray-400 transition">
              Homepage
            </Link>
          </li>
          <li>
            <Link href="/series" className="hover:text-gray-400 transition">
              Séries
            </Link>
          </li>
          <li>
            <Link href="/sobre" className="hover:text-gray-400 transition">
              Sobre
            </Link>
          </li>
        </ul>
      </div>

      {menuOpen && (
        <ul className="flex flex-col gap-4 mt-4 text-lg font-semibold font-archivo p-4 rounded-md md:hidden">
          <li>
            <Link href="/" className="hover:text-gray-400 transition" onClick={() => setMenuOpen(false)}>
              Homepage
            </Link>
          </li>
          <li>
            <Link href="/series" className="hover:text-gray-400 transition" onClick={() => setMenuOpen(false)}>
              Séries
            </Link>
          </li>
          <li>
            <Link href="/sobre" className="hover:text-gray-400 transition" onClick={() => setMenuOpen(false)}>
              Sobre
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};
