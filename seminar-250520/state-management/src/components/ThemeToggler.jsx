import React from "react";
import { useTheme } from "../ThemeContext";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{ padding: "10px 20px", fontSize: "16px" }}
    >
      현재 테마: {theme} → 클릭해서 변경
    </button>
  );
};

export default ThemeToggler;
