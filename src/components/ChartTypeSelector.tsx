'use client';

import { ChartType } from '@/types/sales';

interface ChartTypeSelectorProps {
  currentType: ChartType;
  onTypeChange: (type: ChartType) => void;
  className?: string; // optional extra styling
}

export default function ChartTypeSelector({ currentType, onTypeChange, className }: ChartTypeSelectorProps) {
  const types: ChartType[] = ['bar', 'line', 'pie'];

  return (
    <div className={`flex flex-wrap sm:flex-nowrap gap-2 ${className || ''}`}>
      {types.map((type) => {
        const isActive = currentType === type;
        return (
          <button
            key={type}
            onClick={() => onTypeChange(type)}
            className={`px-4 py-2 rounded-md font-medium transition-colors w-full sm:w-auto ${
              isActive
                ? 'bg-primary-600 text-white hover:bg-primary-700'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)} Chart
          </button>
        );
      })}
    </div>
  );
}
