// app/layout.tsx

import './globals.css';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Portfolio</title>
      </head>
      <body className="min-h-screen flex flex-col bg-gray-50">
        <main className="flex-grow flex flex-col items-center p-6">
          {/* Render the child components/pages */}
          {children}
        </main>
        <footer className="py-6 text-center text-gray-500">
          &copy; {new Date().getFullYear()} Virgile Barbera. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
