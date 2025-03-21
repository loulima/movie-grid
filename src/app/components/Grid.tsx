'use client';

import { ReactNode, ReactElement } from 'react'

export const Grid = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <div className="!grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">{children}</div>
  );
};
 