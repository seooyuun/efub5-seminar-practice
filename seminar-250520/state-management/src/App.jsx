import React from "react";
import { ThemeProvider } from "./ThemeContext";
import ThemeToggler from "./components/ThemeToggler";

const App = () => {
  return (
    <ThemeProvider>
      <div style={{ padding: "20px" }}>
        <h1>🌗 Context API 테마 토글 실습</h1>
        <ThemeToggler />
      </div>
    </ThemeProvider>
  );
};

export default App;
