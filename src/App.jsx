import React from "react";
import { Navigate } from "react-router-dom";
import { useGlobal } from "./context/GlobalContext";

export default function ProtectedRoute({ children, adminOnly = false }) {
  const { currentUser } = useGlobal();

  if (!currentUser) return <Navigate to="/login" />;

  if (adminOnly && currentUser.role !== "admin") return <Navigate to="/dashboard" />;

  return children;
}
