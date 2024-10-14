// AuthContext.js
import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState();

  return (
    <DataContext.Provider value={{ userData, setUserData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
