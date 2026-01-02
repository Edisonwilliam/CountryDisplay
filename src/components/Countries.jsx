import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const url =
  "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca3";

const Countries = ({ searchTerm, selectedRegion }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountriesData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
    };

    fetchCountriesData();
  }, []);

  const removeCountry = (cca3) => {
    setCountries((prev) =>
      prev.filter((country) => country.cca3 !== cca3)
    );
  };

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesRegion =
      selectedRegion === "" || country.region === selectedRegion;

    return matchesSearch && matchesRegion;
  });

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
        {filteredCountries.map((country) => {
          const {
            cca3,
            name,
            population,
            region,
            capital,
            flags,
          } = country;

          return (
            <article
              key={cca3}
              className="bg-white dark:bg-slate-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-full h-40 overflow-hidden">
                <img
                  src={flags.png}
                  alt={name.common}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
                  {name.common}
                </h2>

                <div className="space-y-1 text-sm  text-gray-900 dark:text-white">
                  <p>
                    <span className="font-bold">Population:</span>{" "}
                    {population.toLocaleString()}
                  </p>
                  <p>
                    <span className="font-bold">Region:</span> {region}
                  </p>
                  <p>
                    <span className="font-bold">Capital:</span>{" "}
                    {capital?.[0] || "N/A"}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center px-6 pb-6">
                <Link
                  to={`/countries/${encodeURIComponent(name.common)}`}
                  className="text-blue-500 font-semibold hover:underline"
                >
                  Learn more
                </Link>

                <button
                  onClick={() => removeCountry(cca3)}
                  className="text-red-500 font-semibold hover:underline"
                >
                  Remove
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Countries;
