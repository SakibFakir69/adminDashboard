import React from 'react';
import RevenueChart from './RevenueChart';
import SalesChart from './SalesChart';

function ChartSection() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 p-4">

      {/* Revenue Chart - spans 2 columns on xl screens */}
      <div className="xl:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <RevenueChart />
      </div>

      {/* Sales Chart */}
      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <SalesChart />
        </div>
      </div>

    </div>
  );
}

export default ChartSection;
