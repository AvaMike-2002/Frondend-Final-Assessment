'use client';

import { SaleData } from '@/types/sales';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface PieChartComponentProps {
  data: SaleData[];
  threshold?: number;
}

export default function PieChartComponent({ data, threshold }: PieChartComponentProps) {
  // Prepare data for pie chart - aggregate sales by year
  const aggregateByYear = () => {
    const totals = {
      '2024': 0,
      '2023': 0,
      '2022': 0,
    };

    data.forEach(item => {
      if (!threshold || item.sales2024 >= threshold) totals['2024'] += item.sales2024;
      if (!threshold || item.sales2023 >= threshold) totals['2023'] += item.sales2023;
      if (!threshold || item.sales2022 >= threshold) totals['2022'] += item.sales2022;
    });

    return [
      { name: '2024 Sales', value: totals['2024'] },
      { name: '2023 Sales', value: totals['2023'] },
      { name: '2022 Sales', value: totals['2022'] },
    ].filter(item => item.value > 0);
  };

  const pieData = aggregateByYear();
  const COLORS = ['#3b82f6', '#10b981', '#f59e0b'];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={pieData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={(entry) => `${entry.name}: $${entry.value.toLocaleString()}`}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}