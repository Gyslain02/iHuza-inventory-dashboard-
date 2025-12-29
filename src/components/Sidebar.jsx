import React, { useState } from "react";
import {
  Laptop,
  Users,
  Package,
  ListFilter,
  Layers,
  LogOut,
  BoxIcon,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useGlobal } from "../context/GlobalContext";

export default function Sidebar() {
  const { currentUser, logout } = useGlobal();
  const location = useLocation();

  const [active, setActive] = useState(
    location.pathname.split("/")[1] || "dashboard"
  );

  const menuItems = [
    { label: "Dashboard", icon: Laptop, path: "/dashboard" },
    { label: "Products", icon: Package, path: "/products" },
    { label: "Categories", icon: Layers, path: "/categories" },
    {
      label: "Users",
      icon: Users,
      path: "/users",
      adminOnly: true,
    },
    { label: "Assignments", icon: ListFilter, path: "/assignments" },
  ];

  return (
    <aside className="bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 w-64 min-h-screen flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-10 p-6">
        <div className="bg-[#2563eb] text-white p-2 rounded-xl">
          <BoxIcon size={20} />
        </div>
        <div>
          <h1 className="font-bold text-lg text-gray-900 dark:text-gray-100 mt-2">
            iHUZA
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 tracking-wide">
            INVENTORY
          </p>
        </div>
      </div>

      {/* Menu */}
      <nav className="space-y-1 flex-1 px-3">
        {menuItems.map((item) => {
          // ✅ ADMIN CHECK FIXED
          if (item.adminOnly && currentUser?.role !== "admin") return null;

          const isActive = active === item.label.toLowerCase();

          return (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => setActive(item.label.toLowerCase())}
              className={`flex items-center justify-between w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition
                ${
                  isActive
                    ? "bg-[#2563eb]/10 text-[#2563eb] dark:text-blue-400"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                }`}
            >
              <div className="flex items-center gap-3">
                <item.icon size={18} />
                <span>{item.label}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-6 border-t border-gray-100 dark:border-gray-700">
        <button
          onClick={logout}
          className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-200 hover:text-red-500 transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}
