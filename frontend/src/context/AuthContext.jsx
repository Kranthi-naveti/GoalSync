import { createContext, useContext, useEffect, useState } from 'react';

// Create Context
const AuthContext = createContext();

// Custom hook to use AuthContext
export function useAuth() {
  return useContext(AuthContext);
}

// Provider Component
export function AuthProvider({ children }) {
  // Logged-in user information
  const [user, setUser] = useState(null);

  // JWT token
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  // Load user from localStorage when app starts
  useEffect(() => {
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Login function
  const login = (userData, jwtToken) => {
    setUser(userData);
    setToken(jwtToken);

    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', jwtToken);
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setToken(null);

    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  // Helper flags
  const isAuthenticated = !!token;
  const role = user?.role || null;

  // Values exposed to the app
  const value = {
    user,
    token,
    role,
    isAuthenticated,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}