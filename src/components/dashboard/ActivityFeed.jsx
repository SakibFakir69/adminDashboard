import React from "react";
import {
  User,
  ShoppingCart,
  DollarSign,
  Edit,
  Trash,
  Settings,
  Clock,
} from "lucide-react";

const Activits = [
  {
    id: 1,
    type: "user",
    icon: User,
    title: "New User Registered",
    description: "John Smith created an account",
    time: "1 minute ago",
    color: "text-blue-500",
    bgColor: "bg-blue-500 dark:bg-blue-900/30",
  },
  {
    id: 2,
    type: "purchase",
    icon: ShoppingCart,
    title: "New Order Placed",
    description: "Emma Johnson purchased iPhone 15 Pro",
    time: "5 minutes ago",
    color: "text-green-500",
    bgColor: "bg-green-500 dark:bg-green-900/30",
  },
  {
    id: 3,
    type: "payment",
    icon: DollarSign,
    title: "Payment Received",
    description: "Payment of $499 received from Daniel Lee",
    time: "12 minutes ago",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500 dark:bg-emerald-900/30",
  },
  {
    id: 4,
    type: "edit",
    icon: Edit,
    title: "Product Updated",
    description: "Sophia Davis updated product details",
    time: "25 minutes ago",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500 dark:bg-yellow-900/30",
  },
  {
    id: 5,
    type: "delete",
    icon: Trash,
    title: "Product Deleted",
    description: "Michael Brown removed an item from the store",
    time: "42 minutes ago",
    color: "text-red-500",
    bgColor: "bg-red-500 dark:bg-red-900/30",
  },
  {
    id: 6,
    type: "settings",
    icon: Settings,
    title: "System Settings Updated",
    description: "Admin changed theme configuration",
    time: "1 hour ago",
    color: "text-purple-500",
    bgColor: "bg-purple-500 dark:bg-purple-900/30",
  },
];

function ActivityFeed() {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            Activity Feed
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Recent System Activities
          </p>
        </div>
        <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
          View All
        </button>
      </div>

      {/* Activity List */}
      <div className="p-6">
        <div className="space-y-4">
          {Activits.map((activity) => {
            const Icon = activity.icon;
            return (
              <div
                key={activity.id}
                className="flex items-start space-x-4 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
              >
                <div
                  className={`p-2 rounded-lg ${activity.bgColor} bg-opacity-10`}
                >
                  <Icon className={`w-5 h-5 ${activity.color}`} />
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-white">
                    {activity.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 truncate">
                    {activity.description}
                  </p>
                  <div className="flex items-center space-x-1 mt-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {activity.time}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ActivityFeed;
