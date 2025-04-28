import { createContext, useContext, useState, useEffect } from "react";
import usersData from '../data/users.json';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    try {
      
      const storedUsers = localStorage.getItem("users");
      if (!storedUsers) {
        localStorage.setItem("users", JSON.stringify(usersData));
      }
      
      
      const loadedUsers = JSON.parse(localStorage.getItem("users") || usersData);
      setUsers(loadedUsers);

      
      const savedUser = localStorage.getItem("currentUser");
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (error) {
      console.error("Error initializing auth data:", error);
      setUsers(usersData);
    }
  }, []);

  const getUsers = () => {
    try {
      return JSON.parse(localStorage.getItem("users") || "[]");
    } catch {
      return [];
    }
  };

  const signup = (name, email, password) => {
    const users = getUsers();
    
    
    if (users.some(u => u.email === email)) {
      return { success: false, error: "User already exists" };
    }

    const newUser = { 
      id: Date.now(), 
      name, 
      email, 
      password 
    };
    const updatedUsers = [...users, newUser];
    
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentUser", JSON.stringify({ name, email }));
    setUser({ name, email });
    setUsers(updatedUsers);
    
    return { success: true };
  };

  const login = (email, password) => {
    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      const { name, email } = user;
      localStorage.setItem("currentUser", JSON.stringify({ name, email }));
      setUser({ name, email });
      return { success: true };
    }
    
    return { success: false, error: "Invalid credentials" };
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      users, 
      signup, 
      login, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);