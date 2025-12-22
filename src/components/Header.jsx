
import React from "react";
import { Bell, Moon, Sun, Settings, User } from "lucide-react";
import { useGlobal } from "../context/GlobalContext";

export default function Header() {
  const { currentUser, darkMode, toggleDarkMode } = useGlobal();

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between sticky top-0 z-40">
      
      <div>
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">Dashboard</h1>
        <h2 className="text-sm text-gray-600 dark:text-gray-300">
          Welcome Back, {currentUser.name}
        </h2>
      </div>

      <div className="mt-3 sm:mt-0 flex items-center gap-5 text-white">
        <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
        </button>
        <Settings />
        <Bell />
        <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
          {currentUser.email} <User size={20} className="text-blue-500" />
        </p>
      </div>
    </header>
  );
}
