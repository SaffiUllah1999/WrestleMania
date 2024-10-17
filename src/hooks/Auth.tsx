// AuthContext.js
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isWresterLogin, setisWresterLogin] = useState(false);

  const loginSet = () => setIsAuthenticated(true);
  const logoutSet = () => setIsAuthenticated(false);


  const loginWrestlerSet = () => setisWresterLogin(true);
  const logoutWrestlerSet = () => setisWresterLogin(false);

  return (
    <AuthContext.Provider value={{isWresterLogin,setisWresterLogin, isAuthenticated,logoutWrestlerSet,loginWrestlerSet, loginSet, logoutSet }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
