
import React, { useState } from "react";
import {
 Laptop,
  Users,
  Package,
  ListFilter ,
  LogOut,
  BoxIcon,
  Layers
} from "lucide-react";

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { label: "Dashboard" , icon: Laptop, count: null },
    { label: "Users", icon: Users, count: 116 },
    { label: "Products", icon: Package, count: 100 },
    { label: "Assignments", icon: ListFilter, count: 10 },
    { label: "Categories", icon: Layers, count: null },
  ];

  return (
    <aside className="bg-white border-r border-gray-200 w-64 min-h-screen flex flex-col ">
        <div className="flex items-center gap-2 mb-10">
          <div className="bg-[#2563eb] text-white p-2 rounded-xl">
            <BoxIcon size={20} />
          </div>
          <div>
            <h1 className="font-bold text-lg text-gray-900 mt-2">iHUZA</h1>
            <p className="text-xs text-gray-500 tracking-wide">INVENTORY</p>
          </div>
        </div>

        
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const isActive = active === item.label;
            return (
              <button
                key={item.label}
                onClick={() => setActive(item.label)}
                className={`flex items-center justify-between w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition ${
                  isActive
                    ? "bg-[#2563eb]/10 text-[#2563eb]"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </div>
                {item.count && (
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      isActive
                        ? "bg-[#2563eb] text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      

      
      <div className="p-6 border-t border-gray-100">
        <button className="flex items-center gap-5 text-sm font-medium text-gray-600 mt-100 hover:text-red-500 transition">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}
