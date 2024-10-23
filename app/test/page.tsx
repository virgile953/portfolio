"use client"; // Mark this component as a client component

import { useState, useEffect } from 'react';

// Filtering functions
const isPrime = (number: number): boolean => {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
};

const isEven = (number: number): boolean => {
  return number % 2 === 0;
};

const isOdd = (number: number): boolean => {
  return number % 2 !== 0;
};

// List of functions
const filters = {
  prime: isPrime,
  even: isEven,
  odd: isOdd,
};

// Define a type for the filter keys
type FilterKeys = keyof typeof filters;

export default function TestPage() {
  const [selectedFilterKey, setSelectedFilterKey] = useState<FilterKeys>('even'); // Default filter
  const [start, setStart] = useState<number | ''>(''); // State for start input
  const [end, setEnd] = useState<number | ''>(''); // State for end input
  const [numbers, setNumbers] = useState<number[]>([]); // State for generated numbers
  const [filteredNumbers, setFilteredNumbers] = useState<number[]>([]);

  // Generate numbers based on start and end
  const generateNumbers = () => {
    const startNum = Number(start);
    const endNum = Number(end);

    if (!isNaN(startNum) && !isNaN(endNum) && startNum <= endNum) {
      const generated = Array.from({ length: endNum - startNum + 1 }, (_, index) => startNum + index);
      setNumbers(generated);
    } else {
      setNumbers([]); // Reset numbers if inputs are invalid
    }
  };

  const filterNumbers = (filterKey: FilterKeys) => {
    const selectedFilter = filters[filterKey];
    return numbers.filter(selectedFilter);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedKey = event.target.value as FilterKeys; // Assert the type to FilterKeys
    setSelectedFilterKey(selectedKey);
  };

  // useEffect to update filtered numbers when selectedFilterKey changes
  useEffect(() => {
    const newFilteredNumbers = filterNumbers(selectedFilterKey);
    setFilteredNumbers(newFilteredNumbers);
  }, [selectedFilterKey, numbers]); // Dependency on numbers to filter based on the generated numbers

  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-extrabold mb-6">Test Page</h1>

      {/* Input fields for start and end values */}
      <div className="mb-4">
        <input
          type="number"
          value={start}
          onChange={(e) => setStart(e.target.value ? Number(e.target.value) : '')} // Handle input change
          placeholder="Start"
          className="border p-2 rounded mr-2"
        />
        <input
          type="number"
          value={end}
          onChange={(e) => setEnd(e.target.value ? Number(e.target.value) : '')} // Handle input change
          placeholder="End"
          className="border p-2 rounded"
        />
        <button
          onClick={generateNumbers}
          className="ml-2 bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Generate Numbers
        </button>
      </div>

      {/* Dropdown for filter selection */}
      <select value={selectedFilterKey} onChange={handleFilterChange} className="mb-4 border p-2 rounded bg-gray-400">
        {Object.keys(filters).map((filterKey) => (
          <option key={filterKey} value={filterKey}>
            {filterKey.charAt(0).toUpperCase() + filterKey.slice(1)} {/* Capitalize the first letter */}
          </option>
        ))}
      </select>

      {/* Display filtered numbers */}
      <div className="mt-4">
        <p className="text-lg text-center">
          Filtered Numbers: {filteredNumbers.length > 0 ? filteredNumbers.join(', ') : 'None'}
        </p>
      </div>
    </div>
    </>
  );
}
