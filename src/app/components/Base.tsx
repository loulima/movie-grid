'use client';

import { ReactElement, ReactNode } from 'react';

export const Base = ({ children }: { children: ReactNode }): ReactElement => {
  return <main className="my-8 p-6 mx-4">{children}</main>;
};
