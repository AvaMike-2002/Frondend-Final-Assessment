# Sales Dashboard with Next.js 15

A comprehensive sales analytics dashboard built with Next.js 15, TypeScript, and Recharts. This application visualizes sales data from 2022-2024 with interactive charts and filtering capabilities.

## 🚀 Features

### Core Features
- **Sales Data Visualization**: View sales data for 2022, 2023, and 2024 through interactive charts
- **Multiple Chart Types**: Switch between bar charts, line charts, and pie charts using Recharts
- **Custom Filter Input**: Set your own sales threshold to filter the displayed data
- **API Integration**: Toggle between mock data and simulated API responses
- **Responsive Design**: Fully responsive dashboard that works on all devices

### Technical Features
- Built with Next.js 15 App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Recharts for data visualization
- Atomic design principle for components
- Mock data based on random Kaggle-like sales trends

## 📁 Project Structure


sales-dashboard/
├── src/
│ ├── app/
│ │ ├── dashboard/
│ │ │ └── page.tsx # Main dashboard page
│ │ ├── layout.tsx # Root layout
│ │ ├── page.tsx # Landing page
│ │ └── globals.css # Global styles
│ ├── components/
│ │ ├── charts/
│ │ │ ├── BarChartComponent.tsx
│ │ │ ├── LineChartComponent.tsx
│ │ │ └── PieChartComponent.tsx
│ │ ├── FilterInput.tsx
│ │ ├── ChartTypeSelector.tsx
│ │ └── HelloWorld.tsx # Original component preserved
│ ├── data/
│ │ └── mockData.ts # Mock sales data
│ ├── services/
│ │ └── api.ts # API service layer
│ └── types/
│ └── sales.ts # TypeScript interfaces
├── public/
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── README.md


## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18.17 or later
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sales-dashboard.git
   cd sales-dashboard







































































