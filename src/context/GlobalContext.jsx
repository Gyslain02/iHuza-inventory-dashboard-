import React, { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
 
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("darkMode");
    if (stored !== null) setDarkMode(JSON.parse(stored));
  }, []);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

 
  const [users, setUsers] = useState(() => {
    const stored = localStorage.getItem("users");
    return (
      JSON.parse(stored) || [
        {
          id: uuidv4(),
          name: "Admin User",
          email: "admin@ihuza.com",
          role: "admin",
          status: "Active",
          password: "admin123",
        },
      ]
    );
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const stored = localStorage.getItem("currentUser");
    return stored ? JSON.parse(stored) : null;
  });

 
  const [products, setProducts] = useState(() => {
    const stored = localStorage.getItem("products");
    return stored ? JSON.parse(stored) : [];
  });

  const [categories, setCategories] = useState(() => {
    const stored = localStorage.getItem("categories");
    return stored ? JSON.parse(stored) : [];
  });

 
  const isAdmin = currentUser?.role === "admin";

  const visibleProducts = isAdmin
    ? products
    : products.filter((p) => p.assignedTo === currentUser?.id);

  const visibleCategories = isAdmin
    ? categories
    : categories.filter((c) => c.assignedTo === currentUser?.id);

  
  const addUser = (user) => {
    const newUser = {
      ...user,
      id: uuidv4(),
      role: "user",
      status: "Active",
    };
    setUsers((prev) => [...prev, newUser]);
    toast.success("User added successfully");
  };

  const updateUser = (id, updatedUser) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, ...updatedUser } : u))
    );
    toast.success("User updated");
  };

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
    toast.success("User deleted");
  };

 
  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: uuidv4(),
      assignedTo: product.assignedTo || currentUser?.id,
    };
    setProducts((prev) => [...prev, newProduct]);
    toast.success("Product added");
  };

  const updateProduct = (id, updatedProduct) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updatedProduct } : p))
    );
    toast.success("Product updated");
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    toast.success("Product deleted");
  };

 
  const addCategory = (category) => {
    const newCategory = {
      ...category,
      id: uuidv4(),
      assignedTo: category.assignedTo || currentUser?.id,
    };
    setCategories((prev) => [...prev, newCategory]);
    toast.success("Category added");
  };

  const updateCategory = (id, updatedCategory) => {
    setCategories((prev) =>
      prev.map((c) => (c.id === id ? { ...c, ...updatedCategory } : c))
    );
    toast.success("Category updated");
  };

  const deleteCategory = (id) => {
    setCategories((prev) => prev.filter((c) => c.id !== id));
    toast.success("Category deleted");
  };

  
  const login = (email, password) => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setCurrentUser(user);
      toast.success(`Welcome back, ${user.name}`);
      return true;
    }

    toast.error("Invalid email or password");
    return false;
  };

  
  const register = (name, email, password) => {
    if (users.some((u) => u.email === email)) {
      toast.error("Email already exists");
      return false;
    }

    const role = email === "admin@ihuza.com" ? "admin" : "user";

    const newUser = {
      id: uuidv4(),
      name,
      email,
      password,
      role,
      status: "Active",
    };

    setUsers((prev) => [...prev, newUser]);
    toast.success("Account created successfully. Please log in.");
    return true;
  };

  const logout = () => {
    setCurrentUser(null);
    toast("Logged out", { icon: "👋" });
  };

 
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  return (
    <GlobalContext.Provider
      value={{
        darkMode,
        toggleDarkMode,

        users,
        addUser,
        updateUser,
        deleteUser,

        currentUser,
        login,
        register,
        logout,

        products,
        visibleProducts,
        addProduct,
        updateProduct,
        deleteProduct,

        categories,
        visibleCategories,
        addCategory,
        updateCategory,
        deleteCategory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);
