
import React from "react";
import Button from "./Button";
import { Users, Package, ListFilter } from "lucide-react";

export default function QuickActions() {
  const actions = [
    {
      title: "View Users",
      description: "View all registered users",
      icon: Users,
      bg: "bg-blue-50 text-blue-700",
    },
    {
      title: "View Products",
      description: "View all registered products",
      icon: Package,
      bg: "bg-blue-50 text-blue-700",
    },
    {
      title: "View Assignments",
      description: "View all product assignments",
      icon: ListFilter,
      bg: "bg-purple-50 text-purple-700",
    },
  ];

  return (
    <section className="bg-white rounded-2xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>

      <div className="space-y-4">
        {actions.map((action, index) => (
          <div
            key={index}
            className={`flex items-center justify-between rounded-xl p-4 hover:shadow-md transition ${action.bg}`}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/80 rounded-lg">
                <action.icon size={20} />
              </div>
              <div>
                <h4 className="font-semibold">{action.title}</h4>
                <p className="text-sm opacity-80">{action.description}</p>
              </div>
            </div>

            <Button className="bg-[#2563eb] text-white text-xs px-4 py-2 rounded-lg hover:bg-[#1e40af]">
              Go
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
