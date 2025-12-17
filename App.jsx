import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <div className="flex h-screen bg-[#f9fafb] overflow-hidden">
      <Sidebar />
      <div className="flex flex-col grow overflow-y-auto">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}
