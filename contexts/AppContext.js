// AppContext.js
"use client";

import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [travelerInfo, setTravelerInfo] = useState({
    date: "",
    visaType: "",
    travelers: [],
  });

  const contextValue = {
    travelerInfo,
    setTravelerInfo,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
