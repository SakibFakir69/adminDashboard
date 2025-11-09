import { MoreHorizontal, TrendingDown, TrendingUp } from "lucide-react";
import React from "react";

const recentOrder = [
  {
    id: 1,
    customer: "John Doe",
    product: "Wireless Headphones",
    amount: "$120.00",
    status: "completed",
    date: "2025-11-01",
  },
  {
    id: 2,
    customer: "Sarah Khan",
    product: "Cotton Jacket",
    amount: "$85.50",
    status: "pending",
    date: "2025-11-03",
  },
  {
    id: 3,
    customer: "Michael Smith",
    product: "Novel Book Set",
    amount: "$45.75",
    status: "canceled",
    date: "2025-11-05",
  },
  {
    id: 4,
    customer: "Emma Wilson",
    product: "Bluetooth Speaker",
    amount: "$99.00",
    status: "completed",
    date: "2025-11-06",
  },
  {
    id: 5,
    customer: "David Lee",
    product: "Running Shoes",
    amount: "$60.25",
    status: "pending",
    date: "2025-11-07",
  },
];


const topProducts = [
  {
    name: "iPad Air",
    sales: 3421,
    revenue: "$852,229",
    trend: "up",
    change: "+3%",
  },
  {
    name: "MacBook Pro",
    sales: 2875,
    revenue: "$1,725,480",
    trend: "up",
    change: "+5%",
  },
  {
    name: "iPhone 15 Pro",
    sales: 5120,
    revenue: "$4,085,600",
    trend: "up",
    change: "+8%",
  },
  {
    name: "Apple Watch Ultra",
    sales: 1980,
    revenue: "$594,000",
    trend: "down",
    change: "-2%",
  },
  {
    name: "AirPods Pro 2",
    sales: 4235,
    revenue: "$847,000",
    trend: "up",
    change: "+6%",
  },
  {
    name: "Magic Keyboard",
    sales: 1560,
    revenue: "$187,200",
    trend: "down",
    change: "-1%",
  },
];



function TabelSection() {
  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
      case "pending":
        return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400";
      case "canceled":
        return "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400";
      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400";
    }
  };

  return (
    <div className="space-y-6">
      {/* Card Header */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden rounded-2xl">
        <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
              Recent Orders
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Latest customer orders
            </p>
          </div>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View All
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-100 dark:bg-slate-800">
              <tr>
                <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Order ID
                </th>
                <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Customer
                </th>
                <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Product
                </th>
                <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Amount
                </th>
                <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Status
                </th>
                <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Date
                </th>
                <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {recentOrder.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/50"
                >
                  <td className="p-4 font-medium text-slate-800 dark:text-white">
                    {item.id}
                  </td>
                  <td className="p-4 font-medium text-slate-800 dark:text-white">
                    {item.customer}
                  </td>
                  <td className="p-4 font-medium text-slate-800 dark:text-white">
                    {item.product}
                  </td>
                  <td className="p-4 font-medium text-slate-800 dark:text-white">
                    {item.amount}
                  </td>
                  <td className="p-2">
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full ${getStatusColor(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4 font-medium text-slate-800 dark:text-white">
                    {item.date}
                  </td>
                  <td className="p-4">
                    <MoreHorizontal className="w-4 h-4 text-slate-600 dark:text-slate-400 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* top product */}

      <div className=" bg-white/80  dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl  border
      border-slate-200/50  dark:border-slate-700/50  overflow-hidden">

        <div className="p-6  border-b border-slate-200/50  dark:border-slate-700/50">
        <div className="flex justify-center  justify-between">

          <div>
            <div className="text-lg  font-bold text-slate-800 dark:text-white">
              <h3 className="text-lg  font-bold text-slate-800 dark:text-white">
                Top Products

              </h3>

            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 ">
              Best performing products


            </p>
          </div>

          <button className="text-blue-600 hover:text-blue-700 text-sm  font-medium">View All</button>

        </div>
        {/* dynamic data */}
        <div className="p-6 space-y-4">

         {topProducts.map((product)=>{

          return  <div className=" flex items-center justify-between p-4  rounded-xl hover:bg-slate-50 dark:bg-slate-800/50 transition-colors">

          <div className="flex-1">
            <h4 className="text-sm  text-slate-800 dark:text-white font-semibold">
              {product.name}
            </h4>
            <p className="text-xs  text-slate-500  dark:text-slate-400 ">{product.sales}</p>

          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-slate-800 dark:text-white">{product.revenue}</p>
           <div className="flex  items-center  space-x-1">

            {product.trend==='up' ? <TrendingUp className="w-3 h-3 text-emerald-500 "/> : <TrendingDown className="w-3 h-3"/>}
           
            <span className={`text-xs font-medium ${product.trend==='up' ? 'text-emerald-500' : 'text-red-500'}`}>{product.change}</span>

           </div>
          </div>

          </div>
         })}

        </div>

        </div>

      </div>


    </div>
  );
}

export default TabelSection;
