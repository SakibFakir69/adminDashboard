import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

function RevenueChart() {
  const data = [
    { month: "Jan", revenue: 4500, expense: 5500 },
    { month: "Feb", revenue: 5200, expense: 6000 },
    { month: "Mar", revenue: 6100, expense: 5900 },
    { month: "Apr", revenue: 7000, expense: 6400 },
    { month: "May", revenue: 8200, expense: 7200 },
    { month: "Jun", revenue: 7600, expense: 6800 },
    { month: "Jul", revenue: 8800, expense: 7500 },
    { month: "Aug", revenue: 9400, expense: 8000 },
    { month: "Sep", revenue: 10200, expense: 8600 },
    { month: "Oct", revenue: 9700, expense: 9100 },
    { month: "Nov", revenue: 10800, expense: 9500 },
    { month: "Dec", revenue: 12000, expense: 10200 },
  ];

  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 p-6 rounded-2xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-white">
            Revenue Chart
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Monthly revenue and expense
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
            <span className="text-sm text-slate-600 dark:text-slate-400">
              Revenue
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full" />
            <span className="text-sm text-slate-600 dark:text-slate-400">
              Expense
            </span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={6}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e2e8f0"
              opacity={0.3}
            />
            <XAxis dataKey="month" tick={{ fill: "#94a3b8" }} />
            <YAxis tick={{ fill: "#94a3b8" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(30,41,59,0.9)",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Legend />
            <Bar
              dataKey="revenue"
              fill="url(#colorRevenue)"
              radius={[6, 6, 0, 0]}
            />
            <Bar
              dataKey="expense"
              fill="url(#colorExpense)"
              radius={[6, 6, 0, 0]}
            />

            {/* Gradient definitions */}
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366F1" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.4} />
              </linearGradient>
              <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#475569" stopOpacity={0.4} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default RevenueChart;
