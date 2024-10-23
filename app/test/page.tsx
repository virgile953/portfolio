"use client";

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
  const [selectedFilterKey, setSelectedFilterKey] = useState<FilterKeys>('even');
  const [start, setStart] = useState<number | ''>('');
  const [end, setEnd] = useState<number | ''>('');
  const [numbers, setNumbers] = useState<number[]>([]);
  const [filteredNumbers, setFilteredNumbers] = useState<number[]>([]);


  const generateNumbers = () => {
    const startNum = Number(start);
    const endNum = Number(end);

    if (!isNaN(startNum) && !isNaN(endNum) && startNum <= endNum) {
      const generated = Array.from({ length: endNum - startNum + 1 }, (_, index) => startNum + index);
      setNumbers(generated);
    } else {
      setNumbers([]);
    }
  };

  const filterNumbers = (filterKey: FilterKeys) => {
    const selectedFilter = filters[filterKey];
    return numbers.filter(selectedFilter);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedKey = event.target.value as FilterKeys;
    setSelectedFilterKey(selectedKey);
  };


  useEffect(() => {
    const newFilteredNumbers = filterNumbers(selectedFilterKey);
    setFilteredNumbers(newFilteredNumbers);
  }, [selectedFilterKey, numbers]);

  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-extrabold mb-6">Test Page</h1>

      {/* Input fields for start and end values */}
      <div className="mb-4">
        <input
          type="number"
          value={start}
          onChange={(e) => setStart(e.target.value ? Number(e.target.value) : '')}
          placeholder="Start"
          className="border p-2 rounded mr-2"
        />
        <input
          type="number"
          value={end}
          onChange={(e) => setEnd(e.target.value ? Number(e.target.value) : '')}
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
            {filterKey.charAt(0).toUpperCase() + filterKey.slice(1)} {/* because why tf not */}
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
