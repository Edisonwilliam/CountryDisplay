import { useState, useEffect } from "react";
import Header from "./components/Header";
import Countries from "./components/Countries";
import Filter from "./components/Filter";
import { Routes, Route } from "react-router-dom";
import Country from "./components/Country";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  // Apply dark mode class to HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filter
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
              />

              <Countries
                searchTerm={searchTerm}
                selectedRegion={selectedRegion}
              />
            </>
          }
        />

        <Route path="/countries/:name" element={<Country />} />
      </Routes>
    </div>
  );
};

export default App;