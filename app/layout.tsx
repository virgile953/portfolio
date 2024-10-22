"use client";
import './globals.css';
import { ReactNode, useEffect, useState } from 'react';
import Button from './components/Button'; // Import your Button component

export default function Layout({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(''); // Track the theme
  const [color, setColor] = useState(''); // Track the color
  const [isColorPickerVisible, setColorPickerVisible] = useState(false); // Track color picker visibility

  // Define the function to toggle dark mode
  const toggleDarkMode = () => {
    const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  // Function to update color theme
  const handleColorChange = (newColor: string) => {
    document.documentElement.style.setProperty('--primary-color', newColor);
    console.log(newColor)
    // Function to convert hex to RGB
    const hexToRgb = (hex: string) => {
      let r = 0, g = 0, b = 0;
      if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
      } else if (hex.length === 7) {
        r = parseInt(hex[1] + hex[2], 16);
        g = parseInt(hex[3] + hex[4], 16);
        b = parseInt(hex[5] + hex[6], 16);
      }
      return [r, g, b];
    };

    const rgb = hexToRgb(newColor);

    // Calculate the hover color by subtracting 50 from each RGB value
    if (rgb.length === 3) {
      const hoverColor = `rgb(${Math.max(0, rgb[0] - 50)}, ${Math.max(0, rgb[1] - 50)}, ${Math.max(0, rgb[2] - 50)})`;
      document.documentElement.style.setProperty('--hover-color', hoverColor);
    }

    localStorage.setItem('color', newColor); // Save the color to localStorage
    setColor(newColor); // Update state
  };




  useEffect(() => {
    // Get theme and color from localStorage on mount
    const storedTheme = localStorage.getItem('theme');
    const storedColor = localStorage.getItem('color');

    if (storedTheme) {
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
      setTheme(storedTheme);
    } else {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', systemPrefersDark);
      setTheme(systemPrefersDark ? 'dark' : 'light');
    }

    if (storedColor) {
      document.documentElement.style.setProperty('--primary-color', storedColor);

      // Function to convert hex to RGB
      const hexToRgb = (hex: string) => {
        let r = 0, g = 0, b = 0;
        if (hex.length === 4) {
          r = parseInt(hex[1] + hex[1], 16);
          g = parseInt(hex[2] + hex[2], 16);
          b = parseInt(hex[3] + hex[3], 16);
        } else if (hex.length === 7) {
          r = parseInt(hex[1] + hex[2], 16);
          g = parseInt(hex[3] + hex[4], 16);
          b = parseInt(hex[5] + hex[6], 16);
        }
        return [r, g, b];
      };

      // Convert the stored color to RGB
      const rgb = hexToRgb(storedColor);

      if (rgb.length === 3) {
        // Calculate hover color
        const hoverColor = `rgb(${Math.max(0, rgb[0] - 50)}, ${Math.max(0, rgb[1] - 50)}, ${Math.max(0, rgb[2] - 50)})`;
        document.documentElement.style.setProperty('--hover-color', hoverColor);
      }

      setColor(storedColor); // Update state with the stored color
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Portfolio</title>
        {/* Inline script for theme and color application */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const theme = localStorage.getItem('theme');
              const color = localStorage.getItem('color');
              if (theme) {
                document.documentElement.classList.add(theme === 'dark' ? 'dark' : '');
              } else {
                const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (systemPrefersDark) {
                  document.documentElement.classList.add('dark');
                }
              }
              if (color) {
                document.documentElement.style.setProperty('--primary-color', color);
              }
            })();
          `,
        }} />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Add the Button component for theme toggle */}
        <div className="absolute top-4 right-4 flex items-center space-x-4">
          <Button onClick={toggleDarkMode} className="p-2">
            Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
          </Button>
          {/* Gear icon for opening color picker */}
          <Button onClick={() => document.getElementById('colorPicker')?.click()} className="relative p-2">
            ⚙️
            {/* Invisible Color Picker */}
            <input
              type="color"
              id="colorPicker"
              value={color || '#2563eb'}
              onChange={(e) => handleColorChange(e.target.value)}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"  // Hide input but keep it clickable
            />
          </Button>


        </div>
        <main className="flex-grow flex flex-col items-center p-6">
          {children}
        </main>
        <footer className="py-6 text-center text-gray-500">
          &copy; {new Date().getFullYear()} Virgile Barbera. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
