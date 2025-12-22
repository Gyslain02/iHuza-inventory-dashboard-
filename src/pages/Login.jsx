
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useGlobal } from "../context/GlobalContext";
import Button from "../components/Button";

export default function Login() {
  const { login, darkMode } = useGlobal();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (login(email, password)) {
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className={`flex justify-center items-center min-h-screen ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"}`}>
      <form onSubmit={handleLogin} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-white">Login</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
          required
        />
        <Button type="submit" className="w-full">Login</Button>
        <p className="mt-3 text-sm text-white">
          Don't have an account? <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
        </p>
      </form>
    </div>
  );
}
