// components/Header.jsx
import { useTheme } from "../context/ThemeContext";
import Button from "./Button";
import { SunIcon, MoonIcon } from "lucide-react";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex justify-between items-center bg-white dark:bg-gray-900 p-4 shadow-md rounded-xl mb-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">InsightBoard</h1>
      <div className="flex items-center gap-3">
        <Button variant="secondary" onClick={toggleTheme}>
          {theme === "dark" ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
        </Button>
      </div>
    </header>
  );
};

export default Header;
