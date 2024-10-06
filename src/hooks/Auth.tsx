// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginSet = () => setIsAuthenticated(true);
  const logoutSet = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, loginSet, logoutSet }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
