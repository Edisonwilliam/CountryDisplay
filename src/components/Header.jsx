import { useEffect, useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Load saved theme OR system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="w-full bg-white dark:bg-slate-700 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          Where in the world?
        </h1>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors"
        >
          <span className="text-lg">
            {darkMode ? "☀️" : "🌙"}
          </span>
          <span className="font-medium">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
