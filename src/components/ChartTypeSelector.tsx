'use client';

import { ChartType } from '@/types/sales';

interface ChartTypeSelectorProps {
  currentType: ChartType;
  onTypeChange: (type: ChartType) => void;
}

export default function ChartTypeSelector({ currentType, onTypeChange }: ChartTypeSelectorProps) {
  const types: ChartType[] = ['bar', 'line', 'pie'];

  return (
    <div className="flex space-x-2">
      {types.map((type) => (
        <button
          key={type}
          onClick={() => onTypeChange(type)}
          className={`chart-button ${
            currentType === type ? 'chart-button-active' : 'chart-button-inactive'
          }`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)} Chart
        </button>
      ))}
    </div>
  );
}