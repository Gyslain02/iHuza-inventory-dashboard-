import React from "react";
import DashboardCard from "../components/DashboardCard";
import ProductList from "../components/ProductList";
import UserTable from "../components/UserTable";
import RecentActivity from "../components/RecentActivity";
import QuickActions from "../components/QuickActions";
import { Users, Package, AlertTriangle, CheckCircle, Box } from "lucide-react";
import { useGlobal } from "../context/GlobalContext";

export default function Dashboard() {
  const {
    currentUser,
    users,
    products,
    visibleProducts,
    visibleCategories,
  } = useGlobal();

  const isAdmin = currentUser?.role === "admin";

 
  const totalUsers = isAdmin ? users.length : 1;

  const totalProducts = visibleProducts.length;

  const assignedProducts = visibleProducts.filter(
    (p) => p.assignedTo === currentUser?.id
  ).length;

  const unassignedProducts = isAdmin
    ? products.filter((p) => !p.assignedTo).length
    : 0;

  return (
    <main className="flex flex-col gap-8 p-6 min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      
      
      <section className="bg-[#2563eb] text-white rounded-2xl p-6 shadow-md">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3">
            <div className="p-3 bg-blue-500 w-fit text-white rounded-xl">
              <Box size={26} />
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-semibold">
                iHUZA INVENTORY - System Overview
              </h2>

              <p className="text-blue-100 text-lg max-w-2xl mt-1">
                Monitor your inventory and product assignments in real-time.
              </p>

              <div className="flex items-center gap-2 mt-2">
                <CheckCircle size={16} className="text-green-400" />
                <span className="text-lg text-blue-100">
                  All Systems Operational
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Users"
          value={totalUsers}
          icon={<Users size={26} />}
        />

        <DashboardCard
          title="Total Products"
          value={totalProducts}
          icon={<Package size={26} />}
        />

        <DashboardCard
          title="Assigned Products"
          value={assignedProducts}
          icon={<CheckCircle size={26} className="text-green-500" />}
        />

        {isAdmin && (
          <DashboardCard
            title="Unassigned Products"
            value={unassignedProducts}
            icon={<AlertTriangle size={26} className="text-yellow-400" />}
          />
        )}
      </section>

     
      <ProductList />

      {isAdmin && <UserTable />}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity />
        <QuickActions />
      </div>
    </main>
  );
}
