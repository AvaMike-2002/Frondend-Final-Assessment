import { SaleData } from '@/types/sales';

// Mock data based on random sales trends from Kaggle-like datasets
export const salesData: SaleData[] = [
  { month: 'Jan', sales2024: 42500, sales2023: 38900, sales2022: 35200 },
  { month: 'Feb', sales2024: 39800, sales2023: 36500, sales2022: 33100 },
  { month: 'Mar', sales2024: 45600, sales2023: 41200, sales2022: 37800 },
  { month: 'Apr', sales2024: 48900, sales2023: 44500, sales2022: 40100 },
  { month: 'May', sales2024: 52300, sales2023: 47800, sales2022: 43200 },
  { month: 'Jun', sales2024: 56700, sales2023: 51200, sales2022: 46800 },
  { month: 'Jul', sales2024: 58900, sales2023: 53400, sales2022: 48900 },
  { month: 'Aug', sales2024: 61200, sales2023: 55600, sales2022: 51200 },
  { month: 'Sep', sales2024: 59800, sales2023: 54500, sales2022: 49800 },
  { month: 'Oct', sales2024: 63400, sales2023: 57800, sales2022: 52300 },
  { month: 'Nov', sales2024: 67800, sales2023: 61200, sales2022: 55600 },
  { month: 'Dec', sales2024: 72300, sales2023: 65400, sales2022: 58900 },
];

// Additional detailed data for API simulation
export const detailedSalesData = [
  { id: '1', month: 'Jan', sales: 42500, year: 2024, category: 'Electronics', region: 'North' },
  { id: '2', month: 'Feb', sales: 39800, year: 2024, category: 'Electronics', region: 'North' },
  { id: '3', month: 'Jan', sales: 38900, year: 2023, category: 'Electronics', region: 'North' },
  { id: '4', month: 'Feb', sales: 36500, year: 2023, category: 'Electronics', region: 'North' },
  { id: '5', month: 'Jan', sales: 35200, year: 2022, category: 'Electronics', region: 'North' },
  { id: '6', month: 'Feb', sales: 33100, year: 2022, category: 'Electronics', region: 'North' },
  { id: '7', month: 'Mar', sales: 45600, year: 2024, category: 'Clothing', region: 'South' },
  { id: '8', month: 'Mar', sales: 41200, year: 2023, category: 'Clothing', region: 'South' },
  { id: '9', month: 'Mar', sales: 37800, year: 2022, category: 'Clothing', region: 'South' },
  { id: '10', month: 'Apr', sales: 48900, year: 2024, category: 'Electronics', region: 'East' },
  { id: '11', month: 'Apr', sales: 44500, year: 2023, category: 'Electronics', region: 'East' },
  { id: '12', month: 'Apr', sales: 40100, year: 2022, category: 'Electronics', region: 'East' },
  { id: '13', month: 'May', sales: 52300, year: 2024, category: 'Furniture', region: 'West' },
  { id: '14', month: 'May', sales: 47800, year: 2023, category: 'Furniture', region: 'West' },
  { id: '15', month: 'May', sales: 43200, year: 2022, category: 'Furniture', region: 'West' },
];