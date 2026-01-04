
import React, { useState } from "react";
import { useGlobal } from "../context/GlobalContext";
import Button from "../components/Button";

export default function Users() {
  const { users, addUser, updateUser, deleteUser, darkMode } = useGlobal();
  const [formData, setFormData] = useState({ name: "", email: "", role: "Staff", status: "Active" });
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      updateUser(editingId, formData);
      setEditingId(null);
    } else {
      addUser(formData);
    }
    setFormData({ name: "", email: "", role: "Staff", status: "Active" });
  };

  const handleEdit = (user) => {
    setEditingId(user.id);
    setFormData({ name: user.name, email: user.email, role: user.role, status: user.status });
  };

  return (
    <div className={`p-6 min-h-screen ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"}`}>
      <h2 className="text-2xl font-bold mb-6">Users</h2>

      
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-2 border rounded-lg w-full dark:bg-gray-700 dark:border-gray-600"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 border rounded-lg w-full dark:bg-gray-700 dark:border-gray-600"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <select
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="p-2 border rounded-lg w-full dark:bg-gray-700 dark:border-gray-600"
          >
            <option>Admin</option>
            <option>User</option>
        
          </select>
          <select
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            className="p-2 border rounded-lg w-full dark:bg-gray-700 dark:border-gray-600"
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
        <Button type="submit" className="mt-4">{editingId ? "Update User" : "Add User"}</Button>
      </form>

      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl shadow-md">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Role</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition text-white">
                <td className="py-3 px-4">{user.name}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4">{user.role}</td>
                <td className="py-3 px-4">{user.status}</td>
                <td className="py-3 px-4 flex gap-2">
                  <button
                    onClick={() => handleEdit(user)}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="text-red-600 hover:underline text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-4 text-gray-500 dark:text-gray-400">
                  No users available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
