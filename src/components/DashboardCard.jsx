
import React from "react";

export default function DashboardCard({ title, value, icon: Icon }) {
  return (
    <div className=" bg-white rounded-2xl shadow-sm p-5 gap-2.5 flex items-center hover:shadow-md transition">
     
      {Icon && (
        <div className="p-3 bg-blue-50 text-[#2563eb] rounded-xl">
          {Icon}
        </div>
      )}
      
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-1">{value}</h2>
        <h4 className="text-sm text-gray-500 font-medium">{title}</h4>
      </div>

     
    </div>
  );
}
