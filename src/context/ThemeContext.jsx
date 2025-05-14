 // context/ThemeContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

// Create the context
const ThemeContext = createContext();

// Custom hook for easy usage
export const useTheme = () => useContext(ThemeContext);

// Provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Load from localStorage or default to 'light'
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    // Apply theme class to document root
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
