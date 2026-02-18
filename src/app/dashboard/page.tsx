'use client';

import { useState } from 'react';
import { SaleData, ChartType } from '@/types/sales';
import { salesData } from '@/data/mockData';
import BarChartComponent from '@/components/charts/BarChartComponent';
import LineChartComponent from '@/components/charts/LineChartComponent';
import PieChartComponent from '@/components/charts/PieChartComponent';
import FilterInput from '@/components/FilterInput';
import ChartTypeSelector from '@/components/ChartTypeSelector';
import { salesApi } from '@/services/api';
import { DollarSign, TrendingUp, Calendar, Download } from 'lucide-react';

export default function DashboardPage() {
  const [data, setData] = useState<SaleData[]>(salesData);
  const [chartType, setChartType] = useState<ChartType>('bar');
  const [threshold, setThreshold] = useState<number | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [useApiData, setUseApiData] = useState<boolean>(false);

  // Calculate totals
  const totals = {
    '2024': data.reduce((sum, item) => sum + item.sales2024, 0),
    '2023': data.reduce((sum, item) => sum + item.sales2023, 0),
    '2022': data.reduce((sum, item) => sum + item.sales2022, 0),
  };
  const totalSales = totals['2024'] + totals['2023'] + totals['2022'];
  const averageGrowth = ((totals['2024'] - totals['2023']) / totals['2023'] * 100).toFixed(1);

  // Fetch data from API
  const fetchApiData = async () => {
    setIsLoading(true);
    try {
      const apiData = await salesApi.getAllSales();
      const transformedData = salesData.map(monthData => {
        const apiForMonth = apiData.filter(item => item.month === monthData.month);
        return {
          ...monthData,
          sales2024: apiForMonth.find(item => item.year === 2024)?.sales || monthData.sales2024,
          sales2023: apiForMonth.find(item => item.year === 2023)?.sales || monthData.sales2023,
          sales2022: apiForMonth.find(item => item.year === 2022)?.sales || monthData.sales2022,
        };
      });
      setData(transformedData);
    } catch (error) {
      console.error('Error fetching API data:', error);
      setData(salesData);
    } finally {
      setIsLoading(false);
    }
  };

  // Toggle between mock and API data
  const toggleDataSource = () => {
    if (!useApiData) fetchApiData();
    else setData(salesData);
    setUseApiData(!useApiData);
  };

  // Reset filters + chart type
  const handleReset = () => {
    setChartType('bar');
    setThreshold(undefined);
  };

  // Render chart based on selected type
  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return <BarChartComponent data={data} threshold={threshold} />;
      case 'line':
        return <LineChartComponent data={data} threshold={threshold} />;
      case 'pie':
        return <PieChartComponent data={data} threshold={threshold} />;
      default:
        return <BarChartComponent data={data} threshold={threshold} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <h1 className="text-3xl font-bold text-gray-900">Sales Dashboard</h1>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <button
              onClick={toggleDataSource}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-2 w-full sm:w-auto"
            >
              <Download size={18} />
              <span>{useApiData ? 'Use Mock Data' : 'Use API Data'}</span>
            </button>
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors w-full sm:w-auto"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="dashboard-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Sales (All Years)</p>
                <p className="text-2xl font-bold text-gray-900">${totalSales.toLocaleString()}</p>
              </div>
              <div className="p-3 bg-primary-100 rounded-full">
                <DollarSign className="w-6 h-6 text-primary-600" />
              </div>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">2024 Sales</p>
                <p className="text-2xl font-bold text-gray-900">${totals['2024'].toLocaleString()}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">2023 Sales</p>
                <p className="text-2xl font-bold text-gray-900">${totals['2023'].toLocaleString()}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">YoY Growth</p>
                <p className="text-2xl font-bold text-gray-900">{averageGrowth}%</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Controls */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <FilterInput onFilterChange={setThreshold} className="flex-1" />
            <ChartTypeSelector currentType={chartType} onTypeChange={setChartType} />
          </div>
        </div>

        {/* Chart Area */}
        <div className="dashboard-card">
          {isLoading ? (
            <div className="h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading data...</p>
              </div>
            </div>
          ) : (
            renderChart()
          )}
        </div>

        {/* Data Table */}
        <div className="dashboard-card overflow-x-auto">
          <h2 className="text-xl font-semibold mb-4">Monthly Sales Data</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">2024 Sales</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">2023 Sales</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">2022 Sales</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">YoY Change</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item) => {
                const yoyChange = ((item.sales2024 - item.sales2023) / item.sales2023 * 100).toFixed(1);
                return (
                  <tr key={item.month}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.month}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${item.sales2024.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${item.sales2023.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${item.sales2022.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`${Number(yoyChange) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {yoyChange}%
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
