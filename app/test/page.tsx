// app/test/page.tsx

"use client"; // Mark this component as a client component

import { useState } from 'react';

export default function TestPage() {
  const [message, setMessage] = useState('');
  const [darkMode, setDarkMode] = useState(true); // State to manage dark mode

  // JavaScript function to run when the button is clicked
  const handleClick = () => {
    setMessage('Button clicked! JavaScript function is running.');
  };

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-6 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}`}>
      <h1 className="text-3xl font-extrabold mb-6">Test Page</h1>

      <button
        onClick={handleClick}
        className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
      >
        Click Me!
      </button>

      {message && (
        <p className="mt-4">{message}</p>
      )}

      <button
        onClick={toggleDarkMode}
        className={`mt-6 py-2 px-4 rounded transition duration-300 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-300 text-black'}`}
      >
        Toggle Dark Mode
      </button>
    </div>
  );
}
