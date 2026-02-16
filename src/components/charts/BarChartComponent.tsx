'use client';

import { SaleData } from '@/types/sales';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface BarChartComponentProps {
  data: SaleData[];
  threshold?: number;
}

export default function BarChartComponent({ data, threshold }: BarChartComponentProps) {
  const filteredData = threshold
    ? data.filter(item => 
        item.sales2024 >= threshold || 
        item.sales2023 >= threshold || 
        item.sales2022 >= threshold
      )
    : data;

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales2024" fill="#3b82f6" name="2024 Sales" />
        <Bar dataKey="sales2023" fill="#10b981" name="2023 Sales" />
        <Bar dataKey="sales2022" fill="#f59e0b" name="2022 Sales" />
      </BarChart>
    </ResponsiveContainer>
  );
}