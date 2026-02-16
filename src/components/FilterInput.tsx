'use client';

import { useState } from 'react';

interface FilterInputProps {
  onFilterChange: (threshold: number | undefined) => void;
}

export default function FilterInput({ onFilterChange }: FilterInputProps) {
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
    <div className="flex items-center space-x-4">
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
        className="filter-input w-64"
      />
      <span className="text-sm text-gray-500">
        {inputValue ? `Showing sales ≥ $${Number(inputValue).toLocaleString()}` : 'Showing all sales'}
      </span>
    </div>
  );
}