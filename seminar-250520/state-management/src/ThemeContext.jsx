import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const value = { theme, toggleTheme };

  const style = {
    background: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <ThemeContext.Provider value={value}>
      <div style={style}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
