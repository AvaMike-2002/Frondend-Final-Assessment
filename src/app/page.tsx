import Link from 'next/link';
import { TrendingUp, BarChart3, Filter, Database } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Sales Analytics Dashboard
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive sales analytics platform built with Next.js 15, TypeScript, and Recharts.
            Visualize sales data from 2022-2024 with interactive charts and filters.
          </p>
          <div className="mt-10">
            <Link
              href="/dashboard"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-primary-600 hover:bg-primary-700 transition-colors"
            >
              Go to Dashboard
              <TrendingUp className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary-100 rounded-full">
                <BarChart3 className="w-8 h-8 text-primary-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Multiple Chart Types</h3>
            <p className="text-gray-600">
              Switch between bar, line, and pie charts to visualize your sales data from different perspectives.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary-100 rounded-full">
                <Filter className="w-8 h-8 text-primary-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Custom Filters</h3>
            <p className="text-gray-600">
              Set custom sales thresholds to focus on specific data points and analyze performance metrics.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary-100 rounded-full">
                <Database className="w-8 h-8 text-primary-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">API Integration</h3>
            <p className="text-gray-600">
              Toggle between mock data and simulated API responses to test real-world data integration.
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Built With Modern Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <span className="text-lg font-semibold text-primary-600">Next.js 15</span>
            </div>
            <div className="p-4">
              <span className="text-lg font-semibold text-primary-600">TypeScript</span>
            </div>
            <div className="p-4">
              <span className="text-lg font-semibold text-primary-600">Tailwind CSS</span>
            </div>
            <div className="p-4">
              <span className="text-lg font-semibold text-primary-600">Recharts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}