'use client';

import { useState } from 'react';

interface FilterInputProps {
  onFilterChange: (threshold: number | undefined) => void;
  className?: string; // Allow additional styling
}

export default function FilterInput({ onFilterChange, className }: FilterInputProps) {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value === '') {
      onFilterChange(undefined);
    } else {
      const threshold = Number(value);
      if (!isNaN(threshold) && threshold >= 0) {
        onFilterChange(threshold);
      }
    }
  };

  return (
    <div className={`flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 ${className || ''}`}>
      <label htmlFor="threshold" className="text-sm font-medium text-gray-700">
        Sales Threshold ($):
      </label>
      <input
        type="number"
        id="threshold"
        min="0"
        step="1000"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter minimum sales"
        className="w-full sm:w-48 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
      />
      <span className="text-sm text-gray-500">
        {inputValue ? `Showing sales ≥ $${Number(inputValue).toLocaleString()}` : 'Showing all sales'}
      </span>
    </div>
  );
}
