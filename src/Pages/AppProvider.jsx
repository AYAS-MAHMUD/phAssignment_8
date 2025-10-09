// src/context/AppContext.jsx
import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [installedApps, setInstalledApps] = useState([]);

  return (
    <AppContext.Provider value={{ installedApps, addInstalledApp }}>
      {children}
    </AppContext.Provider>
  );
};
