
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import "@/styles/globals.css";
import { ReactNode } from 'react';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Cinefilia',
  description: 'Seu guia online de filmes e séries'
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-white'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
