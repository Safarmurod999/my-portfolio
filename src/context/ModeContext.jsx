import React, { useState } from "react";
import { createContext } from "react";

export const ModeContext = createContext();

const ModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState(localStorage.getItem("colorMode") || true);
  const setColorMode = () => {
    setMode(!mode);
    localStorage.setItem("colorMode", mode ? "light" : "dark");
  };
  return (
    <ModeContext.Provider value={{ mode, setColorMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeContextProvider;
