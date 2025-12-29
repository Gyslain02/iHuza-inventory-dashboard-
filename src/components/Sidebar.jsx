import React from "react";
import { Link } from "react-router-dom";
import { useGlobal } from "../context/GlobalContext";

export default function Sidebar() {
  const { currentUser, darkMode } = useGlobal();

  return (
    <aside
      className={`w-64 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4`}
    >
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard"
              className="block px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="block px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/categories"
              className="block px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Categories
            </Link>
          </li>

          {/* Admin-only link */}
          {currentUser?.role === "admin" && (
            <li>
              <Link
                to="/users"
                className="block px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 font-semibold text-red-600 dark:text-red-400"
              >
                Users
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </aside>
  );
}
