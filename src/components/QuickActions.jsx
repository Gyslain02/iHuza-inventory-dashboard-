
import React from "react";
import Button from "./Button";
import { Users, Package, TextAlignCenter } from "lucide-react";

export default function QuickActions() {
  const actions = [
    {
      title: "View Users",
      description: "View all registered users",
      icon: Users,
      bg: "bg-blue-50",
      iconColor: "text-blue-600",
      buttonColor: "bg-[#2563eb]",
    },
    {
      title: "View Products",
      description: "View all registered products",
      icon: Package,
      bg: "bg-blue-50",
      iconColor: "text-blue-600",
      buttonColor: "bg-[#2563eb]",
    },
    {
      title: "View Assignments",
      description: "View all product assignments",
      icon: TextAlignCenter,
      bg: "bg-purple-50",
      iconColor: "text-purple-600",
      buttonColor: "bg-[#7e22ce]",
    },
  ];

  return (
    <section className="bg-white rounded-2xl shadow-sm p-6">
      
      <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>

      
      <div className="space-y-4">
        {actions.map((action, index) => (
          <div
            key={index}
            className={`flex items-center justify-between ${action.bg} rounded-xl p-4 hover:shadow-md transition`}
          >
          
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${action.iconColor} bg-white/70`}>
                <action.icon size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">{action.title}</h4>
                <p className="text-sm text-gray-500">{action.description}</p>
              </div>
            </div>

            <Button
              className={`${action.buttonColor} text-white text-xs px-4 py-2 rounded-lg hover:opacity-90`}
            >
              Go
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
