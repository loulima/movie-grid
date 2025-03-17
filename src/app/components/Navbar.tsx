"use client";
import Link from "next/link";
import { ReactElement } from "react";

export const Navbar= (): ReactElement => {
  return (
    <nav>
      <ul className="flex gap-4 text-[24px] text-black font-semibold font-archivo">
        <li>
          <Link href="/" className="hover:text-gray-400 transition">
            homepage
          </Link>
        </li>
        <li>
          <Link href="/series" className="hover:text-gray-400 transition">
            séries
          </Link>
        </li>
        <li>
          <Link href="/sobre" className="hover:text-gray-400 transition">
            sobre
          </Link>
        </li>
      </ul>
    </nav>
  );
}
