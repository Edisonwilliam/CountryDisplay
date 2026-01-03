import React  from "react";


const Header = ({ darkMode, setDarkMode }) => {
  const handleToggle = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <header className="w-full bg-white dark:bg-slate-700 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <h1 className="text-sm md:text-xl font-bold text-gray-900 dark:text-white">
          Where in the world?
        </h1>

        <button
          onClick={handleToggle}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors"
        >
          <span className="text-lg">
            {darkMode ? "☀️" : "🌙"}
          </span>
          <span className="font-medium text-sm md:text-xl">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;