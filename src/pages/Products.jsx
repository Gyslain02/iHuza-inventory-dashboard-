import React, { useState } from "react";
import { useGlobal } from "../context/GlobalContext";
import Button from "../components/Button";
import toast from "react-hot-toast"; 

export default function Products() {
  const {
    visibleProducts,  
    addProduct,
    updateProduct,
    deleteProduct,
    visibleCategories, 
    users,             
    currentUser,
    darkMode
  } = useGlobal();

  const [form, setForm] = useState({
    name: "",
    category: "",
    status: "In Stock",
    assignedTo: currentUser.id
  });
  const [editId, setEditId] = useState(null);

 
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.category) {
      toast.error("Please fill in all fields");
      return;
    }

    if (editId) {
      updateProduct(editId, form);
      toast.success("Product updated!"); 
    } else {
      addProduct(form);
      toast.success("Product added!"); 
    }

   
    setForm({ name: "", category: "", status: "In Stock", assignedTo: currentUser.id });
    setEditId(null);
  };

 
  const handleEdit = (product) => {
    setForm({
      name: product.name,
      category: product.category,
      status: product.status,
      assignedTo: product.assignedTo || currentUser.id
    });
    setEditId(product.id);
  };

 
  const handleDelete = (id) => {
    deleteProduct(id);
    toast.success("Product deleted!"); 
  };

  return (
    <div className={`p-6 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"} min-h-screen`}>
      <h2 className="text-2xl font-bold mb-4">Products</h2>

      
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow mb-6">
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
            {visibleCategories.map((c) => (
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

          
          {currentUser.role === "admin" && (
            <select
              value={form.assignedTo}
              onChange={(e) => setForm({ ...form, assignedTo: e.target.value })}
              className="p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            >
              {users.map((u) => (
                <option key={u.id} value={u.id}>{u.name}</option>
              ))}
            </select>
          )}

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
              {currentUser.role === "admin" && <th className="py-3 px-4 text-left">Assigned To</th>}
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {visibleProducts.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                <td className="py-3 px-4">{p.name}</td>
                <td className="py-3 px-4">{p.category}</td>
                <td className="py-3 px-4">{p.status}</td>
                {currentUser.role === "admin" && (
                  <td className="py-3 px-4">{users.find(u => u.id === p.assignedTo)?.name || "Unknown"}</td>
                )}
                <td className="py-3 px-4 flex gap-2">
                  <button onClick={() => handleEdit(p)} className="text-blue-600 hover:underline">Edit</button>
                  <button onClick={() => handleDelete(p.id)} className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
