
import React from "react";

export default function ProductList() {
  const products = [
    { name: "MacBook Pro 16\"", category: "Laptops", status: "In Stock", date: "Dec 10, 2024" },
    { name: "Dell XPS 13", category: "Laptops", status: "In Stock", date: "Dec 9, 2024" },
    { name: "iPhone 15 Pro", category: "Mobile", status: "Low Stock", date: "Dec 8, 2024" },
    { name: "iPad Air", category: "Tablets", status: "In Stock", date: "Dec 7, 2024" },
    { name: "Surface Pro 9", category: "Tablets", status: "Out of Stock", date: "Dec 6, 2024" },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "In Stock":
        return "text-green-700 bg-green-100";
      case "Low Stock":
        return "text-yellow-700 bg-yellow-100";
      case "Out of Stock":
        return "text-red-700 bg-red-100";
      default:
        return "text-gray-700 bg-gray-100";
    }
  };

  return (
    <section className="bg-white rounded-2xl shadow-sm p-6">
      
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-800">Recent Added Products</h3>
        </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {products.map((product, index) => (
          <div
            key={index}
            className="border border-gray-100 rounded-xl p-4 hover:shadow-md transition bg-white relative"
          >
            
            <span
              className={`absolute top-3 right-3 text-xs font-medium px-3 py-1 rounded-full ${getStatusClass(
                product.status
              )}`}
            >
              {product.status}
            </span>

            
            <div className="flex flex-col">
              <h4 className="font-semibold text-gray-900">{product.name}</h4>
              <p className="text-sm text-gray-500">{product.category}</p>
              <p className="text-sm text-gray-400 mt-1">{product.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
