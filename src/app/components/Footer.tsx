'use client';

import { ReactElement } from 'react';

export const Footer = (): ReactElement => {
  console.log('ekjhejkwehkew');

  return (
    <footer className="text-black font-archivo font-bold text-center py-4 mt-10">
      <p className="text-sm">&copy; {new Date().getFullYear()} Cinefilia. Todos os direitos reservados.</p>
    </footer>
  );
};
