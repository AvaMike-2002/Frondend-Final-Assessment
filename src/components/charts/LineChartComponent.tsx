'use client';

import { SaleData } from '@/types/sales';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface LineChartComponentProps {
  data: SaleData[];
  threshold?: number;
}

export default function LineChartComponent({ data, threshold }: LineChartComponentProps) {
  const filteredData = threshold
    ? data.filter(item => 
        item.sales2024 >= threshold || 
        item.sales2023 >= threshold || 
        item.sales2022 >= threshold
      )
    : data;

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sales2024" stroke="#3b82f6" name="2024 Sales" strokeWidth={2} />
        <Line type="monotone" dataKey="sales2023" stroke="#10b981" name="2023 Sales" strokeWidth={2} />
        <Line type="monotone" dataKey="sales2022" stroke="#f59e0b" name="2022 Sales" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}