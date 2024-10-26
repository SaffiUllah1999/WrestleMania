// AuthContext.js
import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [wrestleData,setWrestleData ] = useState()

  return (
    <DataContext.Provider value={{ userData, setUserData , wrestleData, setWrestleData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
