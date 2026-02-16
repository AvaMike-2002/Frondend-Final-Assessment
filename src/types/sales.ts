export interface SaleData {
  month: string;
  sales2024: number;
  sales2023: number;
  sales2022: number;
}

export interface ApiSaleData {
  id: string;
  month: string;
  sales: number;
  year: number;
  category: string;
  region: string;
}

export type ChartType = 'bar' | 'line' | 'pie';