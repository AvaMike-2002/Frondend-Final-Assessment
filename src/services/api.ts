import { ApiSaleData } from '@/types/sales';
import { detailedSalesData } from '@/data/mockData';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API service
export const salesApi = {
  // Fetch all sales data
  getAllSales: async (): Promise<ApiSaleData[]> => {
    await delay(800); // Simulate network delay
    return detailedSalesData;
  },

  // Fetch sales by year
  getSalesByYear: async (year: number): Promise<ApiSaleData[]> => {
    await delay(500);
    return detailedSalesData.filter(item => item.year === year);
  },

  // Fetch sales with threshold
  getSalesWithThreshold: async (threshold: number): Promise<ApiSaleData[]> => {
    await delay(600);
    return detailedSalesData.filter(item => item.sales >= threshold);
  },
};