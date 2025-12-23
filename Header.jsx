
import { Bell, Moon, Settings, User, User2 } from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between sticky top-0 z-40">
      
      <div>
        <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
        <h2 className="text-sm  text-gray-600">
          Welcome Back, Admin
        </h2>
        
      </div>

      
      <div className="mt-3 sm:mt-0 flex items-center gap-5">
        <Moon/>
        <Settings/>
        <Bell/>
       <p className="text-sm text-gray-600 grid grid-cols-1 sm:grid-cols-2  gap-2">admin@ihuza.com {<User size={26} className="text-blue-500"/>}</p>
      </div>
    </header>
  );
}
