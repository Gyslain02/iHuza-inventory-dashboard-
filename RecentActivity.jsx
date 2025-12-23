
import React from "react";
import {
  Package,
  UsersRound 
  
} from "lucide-react";

export default function RecentActivity() {
  const activities = [
    {
      icon: Package,
      title: "Product added to inventory",
      description: "MacBook Pro 16'' M3 (PROD2024001)",
      date: "Dec 4, 2024",
    },
    {
      icon: Package,
      title: "Product assigned to Sarah Johnson",
      description: "Dell ThinkPad X1 Carbon (PROD2024001)",
      date: "Dec 3, 2024",
    },
    {
      icon: Package,
      title: "Product assigned to Michael Brown",
      description: "Apple MacBook Air M2 (PROD2024001)",
      date: "Dec 2, 2024",
    },
    {
      icon: Package,
      title: "Product sent for maintenance",
      description: "HP Spectre x360 - Screen replacement required",
      date: "Jan 16, 2024",
    },
    {
      icon: UsersRound,
      title: "New user registered",
      description: "Amanda White - Staff Member",
      date: "Jan 14, 2024",
    },
  ];

  return (
    <section className="bg-white rounded-2xl shadow-sm p-6">
      
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
        <button className="text-sm  hover:underline ">
          View all
        </button>
      </div>

      
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0"
          >
            <div className="p-2 bg-blue-50 text-[#2563eb] rounded-lg flex items-center justify-center">
              <activity.icon size={18} />
            </div>
            <div>
              <p className="text-gray-900 text-sm font-medium">
                {activity.title}
              </p>
              <p className="text-sm text-gray-500">{activity.description}</p>
              <p className="text-xs text-gray-400 mt-1">{activity.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
