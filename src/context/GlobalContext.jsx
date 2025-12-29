import React, { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
 
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("darkMode")) || false;
  });

  
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [
      {
        id: uuidv4(),
        name: "Admin User",
        email: "admin@ihuza.com",
        role: "admin",
        status: "Active",
        password: "admin123",
      },
    ];
  });

 
  const [currentUser, setCurrentUser] = useState(() => {
    return JSON.parse(localStorage.getItem("currentUser")) || null;
  });

 
  const [products, setProducts] = useState(() => {
    return JSON.parse(localStorage.getItem("products")) || [];
  });

  const [categories, setCategories] = useState(() => {
    return JSON.parse(localStorage.getItem("categories")) || [];
  });

 
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  
  const addUser = (user) => {
    const newUser = { ...user, id: uuidv4(), role: "user" }; 
    setUsers((prev) => [...prev, newUser]);
  };

  const updateUser = (id, updatedUser) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, ...updatedUser } : u))
    );
  };

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  
  const addProduct = (product) => {
    const newProduct = { ...product, id: uuidv4() };
    setProducts((prev) => [...prev, newProduct]);
  };

  const updateProduct = (id, updatedProduct) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updatedProduct } : p))
    );
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

 
  const addCategory = (category) => {
    const newCategory = { ...category, id: uuidv4() };
    setCategories((prev) => [...prev, newCategory]);
  };

  const updateCategory = (id, updatedCategory) => {
    setCategories((prev) =>
      prev.map((c) => (c.id === id ? { ...c, ...updatedCategory } : c))
    );
  };

  const deleteCategory = (id) => {
    setCategories((prev) => prev.filter((c) => c.id !== id));
  };

  
  const login = (email, password) => {
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      return true;
    }
    return false;
  };

  
  const register = (name, email, password) => {
   
    if (users.some((u) => u.email === email)) return false;

    
    const newUser = {
      id: uuidv4(),
      name,
      email,
      password,
      role: "user",
      status: "Active",
    };

    setUsers((prev) => [...prev, newUser]);
    return true; 
  };

 
  const logout = () => {
    setCurrentUser(null);
  };

 
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

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
        addProduct,
        updateProduct,
        deleteProduct,
        categories,
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
