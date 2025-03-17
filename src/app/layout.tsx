import { Header } from './components/Header';
import { Footer } from './components/Footer';
import '@/styles/globals.css';
import { ReactNode } from 'react';
import { Metadata } from 'next';

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
