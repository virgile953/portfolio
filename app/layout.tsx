"use client";
import './globals.css';
import { ReactNode, useEffect, useState, useRef } from 'react';
import Button from './components/Button';
import { usePathname } from 'next/navigation';

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();


  const [theme, setTheme] = useState('');
  const [color, setColor] = useState('');
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const badgeRef = useRef<HTMLDivElement>(null);


  const toggleDarkMode = () => {
    const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };


  const handleColorChange = (newColor: string) => {
    document.documentElement.style.setProperty('--primary-color', newColor);
    console.log(newColor);

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


    if (rgb.length === 3) {
      const hoverColor = `rgb(${Math.max(0, rgb[0] - 50)}, ${Math.max(0, rgb[1] - 50)}, ${Math.max(0, rgb[2] - 50)})`;
      document.documentElement.style.setProperty('--hover-color', hoverColor);
    }

    localStorage.setItem('color', newColor);
    setColor(newColor);
  };

  useEffect(() => {

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


      const rgb = hexToRgb(storedColor);

      if (rgb.length === 3) {

        const hoverColor = `rgb(${Math.max(0, rgb[0] - 50)}, ${Math.max(0, rgb[1] - 50)}, ${Math.max(0, rgb[2] - 50)})`;
        document.documentElement.style.setProperty('--hover-color', hoverColor);
      }

      setColor(storedColor);
    }
  }, []);

  useEffect(() => {

    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 1410);
    };


    checkScreenSize();


    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  useEffect(() => {

    if (badgeRef.current) {
      badgeRef.current.innerHTML = `
        <div class="badge-base LI-profile-badge" data-locale="fr_FR" data-size="medium" data-theme="${theme}" data-type="VERTICAL" data-vanity="virgile-barbera-72047783" data-version="v1">
          <a class="badge-base__link LI-simple-link" href="https://fr.linkedin.com/in/virgile-barbera-72047783?trk=profile-badge"></a>
        </div>
      `;

      const script = document.createElement('script');
      script.src = 'https://platform.linkedin.com/badges/js/profile.js';
      script.async = true;
      badgeRef.current.appendChild(script);
    }
  }, [theme]);

  if (pathname === '/test') {
    return (
      <html lang="en">
        <head />
        <body>{children}</body>
      </html>
    );
  }

  return (
    <html lang="en">
    <head>
    <link rel="icon" href="/favicon.ico" />

    <title>Portfolio</title>
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
    <div className={`absolute top-4 right-4 flex flex-col items-start space-y-2`}>
    <div className="flex items-center space-x-4">
    <Button onClick={toggleDarkMode} className="p-2">
    Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
    </Button>
    <Button onClick={() => document.getElementById('colorPicker')?.click()} className="relative p-2">
    ⚙️
    <input
    type="color"
    id="colorPicker"
    value={color || '#2563eb'}
    onChange={(e) => handleColorChange(e.target.value)}
    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
    />
    </Button>
    </div>
        <div style={{display: isSmallScreen ? "none" : "flex"}}>
          <div ref={badgeRef} className="badge-base LI-profile-badge" data-locale="fr_FR" data-size="medium" data-theme={theme} data-type="VERTICAL" data-vanity="virgile-barbera-72047783" data-version="v1">
            <a className="badge-base__link LI-simple-link" href="https://fr.linkedin.com/in/virgile-barbera-72047783?trk=profile-badge"></a>
          </div>
        </div>
        </div>

    <main className="flex-grow flex flex-col items-center p-6">
    {children}
    </main>
    <div style={{display: isSmallScreen ? "flex" : "none"}} className="badge-container">
    <div ref={badgeRef}>
    </div>
    </div>
    <footer className="py-6 text-center text-gray-500">
    &copy; {new Date().getFullYear()} Virgile Barbera. All rights reserved.
    </footer>
    </body>
    <style jsx>{`
        .badge-container {
          display: none;
          justify-content: center;
          margin-bottom: 1rem;
        }

        @media (max-width: 1410px)
          .badge-container {
            display: flex;
            position: relative;
            margin: 0;
          }
        }
      `}</style>

      </html>
    );
  }
