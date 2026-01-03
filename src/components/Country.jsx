import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Country = () => {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name);

  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${decodedName}?fullText=true`)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data[0]);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [decodedName]);

  if (loading) {
    return (
      <div className="bg-white dark:bg-slate-950 min-h-screen flex items-center justify-center text-gray-900 dark:text-white">
        Loading...
      </div>
    );
  }

  if (!country) {
    return (
      <div className="bg-white dark:bg-slate-950 min-h-screen text-gray-900 dark:text-white p-10">
        Country not found
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen text-gray-900 dark:text-white">
      
      <div className="max-w-7xl mx-auto px-6 py-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-2 bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white rounded shadow hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
        >
          ← Back
        </Link>
      </div>

      
      <div className="max-w-7xl mx-auto px-6 pb-16 grid lg:grid-cols-2 gap-16 items-center">
        {/* Flag */}
        <img
          src={country.flags.svg}
          alt={country.name.common}
          className="w-full max-w-xl shadow-lg"
        />

      
        <div>
          <h1 className="text-4xl font-extrabold mb-8 text-gray-900 dark:text-white">
            {country.name.common}
          </h1>

          <div className="grid sm:grid-cols-2 gap-8 text-sm text-gray-700 dark:text-gray-200">
            <div className="space-y-2">
              <p>
                <span className="font-semibold text-gray-900 dark:text-white">Native Name:</span>{" "}
                {Object.values(country.name.nativeName || {})[0]?.common || "N/A"}
              </p>
              <p>
                <span className="font-semibold text-gray-900 dark:text-white">Population:</span>{" "}
                {country.population.toLocaleString()}
              </p>
              <p>
                <span className="font-semibold text-gray-900 dark:text-white">Region:</span> {country.region}
              </p>
              <p>
                <span className="font-semibold text-gray-900 dark:text-white">Sub Region:</span>{" "}
                {country.subregion}
              </p>
              <p>
                <span className="font-semibold text-gray-900 dark:text-white">Capital:</span>{" "}
                {country.capital?.[0]}
              </p>
            </div>

            <div className="space-y-2">
              <p>
                <span className="font-semibold text-gray-900 dark:text-white">Top Level Domain:</span>{" "}
                {country.tld?.[0]}
              </p>
              <p>
                <span className="font-semibold text-gray-900 dark:text-white">Currencies:</span>{" "}
                {Object.values(country.currencies || {})
                  .map((c) => c.name)
                  .join(", ")}
              </p>
              <p>
                <span className="font-semibold text-gray-900 dark:text-white">Languages:</span>{" "}
                {Object.values(country.languages || {}).join(", ")}
              </p>
            </div>
          </div>

        
          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <span className="font-semibold text-gray-900 dark:text-white">Border Countries:</span>

            {country.borders?.length ? (
              country.borders.map((border) => (
                <span
                  key={border}
                  className="px-4 py-1 bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white rounded text-sm shadow"
                >
                  {border}
                </span>
              ))
            ) : (
              <span className="text-gray-500 dark:text-gray-400">None</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;