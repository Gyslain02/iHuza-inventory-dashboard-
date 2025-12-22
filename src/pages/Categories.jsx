
import React, { useState } from "react";
import { useGlobal } from "../context/GlobalContext";
import Button from "../components/Button";

export default function Categories() {
  const { categories, addCategory, updateCategory, deleteCategory, darkMode } = useGlobal();
  const [name, setName] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      updateCategory(editId, { name });
    } else {
      addCategory({ name });
    }
    setName("");
    setEditId(null);
  };

  const handleEdit = (category) => {
    setName(category.name);
    setEditId(category.id);
  };

  return (
    <div className={`p-6 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"} min-h-screen`}>
      <h2 className="text-2xl font-bold mb-4">Categories</h2>

      
      <form onSubmit={handleSubmit} className={`bg-white dark:bg-gray-800 p-4 rounded-xl shadow mb-6 flex gap-3`}>
        <input
          type="text"
          placeholder="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 flex-1"
          required
        />
        <Button type="submit">{editId ? "Update" : "Add"}</Button>
      </form>

    
      <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-xl shadow p-4">
        <table className="min-w-full text-sm text-gray-700 dark:text-gray-200">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-700 text-white dark:text-gray-300 uppercase text-xs font-semibold">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {categories.map((c) => (
              <tr key={c.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                <td className="py-3 px-4">{c.name}</td>
                <td className="py-3 px-4 flex gap-2">
                  <button onClick={() => handleEdit(c)} className="text-blue-600 hover:underline">Edit</button>
                  <button onClick={() => deleteCategory(c.id)} className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
