import { useState } from "react";
import Header from "./components/Header";
import Countries from "./components/Countries";
import Filter from "./components/Filter";
import { Routes, Route } from "react-router-dom";
import Country from "./components/Country";

const App = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  return (
    <div className="bg-gray-950 min-h-screen">
      <Header />

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
