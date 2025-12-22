
import React, { useState } from "react";
import { useGlobal } from "../context/GlobalContext";
import Button from "../components/Button";

export default function Products() {
  const { products, addProduct, updateProduct, deleteProduct, categories, darkMode } = useGlobal();
  const [form, setForm] = useState({ name: "", category: "", status: "In Stock" });
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      updateProduct(editId, form);
    } else {
      addProduct(form);
    }
    setForm({ name: "", category: "", status: "In Stock" });
    setEditId(null);
  };

  const handleEdit = (product) => {
    setForm({ name: product.name, category: product.category, status: product.status });
    setEditId(product.id);
  };

  return (
    <div className={`p-6 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"} min-h-screen`}>
      <h2 className="text-2xl font-bold mb-4">Products</h2>

    
      <form onSubmit={handleSubmit} className={`bg-white dark:bg-gray-800 p-4 rounded-xl shadow mb-6`}>
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <input
            type="text"
            placeholder="Product Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 flex-1"
            required
          />
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 flex-1"
            required
          >
            <option value="">Select Category</option>
            {categories.map((c) => (
              <option key={c.id} value={c.name}>{c.name}</option>
            ))}
          </select>
          <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
            className="p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
          >
            <option value="In Stock">In Stock</option>
            <option value="Low Stock">Low Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
          <Button type="submit">{editId ? "Update" : "Add"}</Button>
        </div>
      </form>

    
      <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-xl shadow p-4">
        <table className="min-w-full text-sm text-gray-700 dark:text-gray-200">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 uppercase text-xs font-semibold">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Category</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {products.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition text-white">
                <td className="py-3 px-4">{p.name}</td>
                <td className="py-3 px-4">{p.category}</td>
                <td className="py-3 px-4">{p.status}</td>
                <td className="py-3 px-4 flex gap-2">
                  <button onClick={() => handleEdit(p)} className="text-blue-600 hover:underline">Edit</button>
                  <button onClick={() => deleteProduct(p.id)} className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
