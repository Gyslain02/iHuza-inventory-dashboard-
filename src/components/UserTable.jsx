
import React from "react";
import Button from "./Button";

export default function UserTable() {
  const users = [
    {
      name: "John Smith",
      email: "john.smith@ihuza.com",
      role: "Admin",
      status: "Active",
      lastLogin: "2 hours ago",
    },
    {
      name: "Sarah Johnson",
      email: "sarah.j@ihuza.com",
      role: "Manager",
      status: "Active",
      lastLogin: "5 hours ago",
    },
    {
      name: "Michael Brown",
      email: "m.brown@ihuza.com",
      role: "Staff",
      status: "Active",
      lastLogin: "1 day ago",
    },
    {
      name: "Emily Davis",
      email: "emily.d@ihuza.com",
      role: "Staff",
      status: "Inactive",
      lastLogin: "3 days ago",
    },
     {
      name: "David  Wilson",
      email: "d.wilson.d@ihuza.com",
      role: "Staff",
      status: "active",
      lastLogin: "6 hours ago",
    },
     {
      name: "Lisa Anderson",
      email: "lisa.a.d@ihuza.com",
      role: "Manager",
      status: "active",
      lastLogin: "30 min ago",
    },
     {
      name: "Robert Taylor",
      email: "r.taylor.d@ihuza.com",
      role: "Staff",
      status: "active",
      lastLogin: "2 days ago",
    },
    {
      name: "Christopher Lee",
      email: "c.lee@ihuza.com",
      role: "Admin",
      status: "Active",
      lastLogin: "1 hour ago",
    },
  ];

  const getRoleClass = (role) => {
    switch (role) {
      case "Admin":
        return "text-purple-700 bg-purple-100";
      case "Manager":
        return "text-blue-700 bg-blue-100";
      case "Staff":
      default:
        return "text-gray-700 bg-gray-100";
    }
  };

  const getStatusClass = (status) => {
    return status === "Active"
      ? "text-green-700 bg-green-100"
      : "text-red-700 bg-red-100";
  };

  return (
    <section className="bg-white rounded-2xl shadow-sm p-6 mt-8">
     
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-800">Users</h3>
        <Button>Add User</Button>
      </div>

      
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-gray-700">
          <thead>
            <tr className="bg-gray-50 text-gray-600 uppercase text-xs font-semibold">
              <th className="py-3 px-4 text-left">User</th>
              <th className="py-3 px-4 text-left">Role</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Last Login</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {users.map((user, index) => (
              <tr key={index} className="hover:bg-gray-50 transition">
                
                <td className="py-4 px-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-semibold">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </td>

                
                <td className="py-4 px-4">
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${getRoleClass(
                      user.role
                    )}`}
                  >
                    {user.role}
                  </span>
                </td>

               
                <td className="py-4 px-4">
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${getStatusClass(
                      user.status
                    )}`}
                  >
                    {user.status}
                  </span>
                </td>

               
                <td className="py-4 px-4 text-gray-500">{user.lastLogin}</td>

              
                <td className="py-4 px-4">
                  <div className="flex items-center gap-4">
                    <button className="text-[#2563eb] hover:underline text-sm font-medium">
                      Edit
                    </button>
                    <button className="text-red-500 hover:underline text-sm font-medium">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
