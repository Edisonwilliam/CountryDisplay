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
      <div className="bg-gray-950 min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  if (!country) {
    return (
      <div className="bg-gray-950 min-h-screen text-white p-10">
        Country not found
      </div>
    );
  }

 return (
  <div className="bg-gray-900 min-h-screen text-white">
    
    <div className="max-w-7xl mx-auto px-6 py-10">
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-8 py-2 bg-gray-700 rounded shadow hover:bg-gray-600"
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
        <h1 className="text-4xl font-extrabold mb-8">
          {country.name.common}
        </h1>

        <div className="grid sm:grid-cols-2 gap-8 text-sm">
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Native Name:</span>{" "}
              {Object.values(country.name.nativeName || {})[0]?.common || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Population:</span>{" "}
              {country.population.toLocaleString()}
            </p>
            <p>
              <span className="font-semibold">Region:</span> {country.region}
            </p>
            <p>
              <span className="font-semibold">Sub Region:</span>{" "}
              {country.subregion}
            </p>
            <p>
              <span className="font-semibold">Capital:</span>{" "}
              {country.capital?.[0]}
            </p>
          </div>

          <div className="space-y-2">
            <p>
              <span className="font-semibold">Top Level Domain:</span>{" "}
              {country.tld?.[0]}
            </p>
            <p>
              <span className="font-semibold">Currencies:</span>{" "}
              {Object.values(country.currencies || {})
                .map((c) => c.name)
                .join(", ")}
            </p>
            <p>
              <span className="font-semibold">Languages:</span>{" "}
              {Object.values(country.languages || {}).join(", ")}
            </p>
          </div>
        </div>

      
        <div className="mt-10 flex flex-wrap gap-4 items-center">
          <span className="font-semibold">Border Countries:</span>

          {country.borders?.length ? (
            country.borders.map((border) => (
              <span
                key={border}
                className="px-4 py-1 bg-gray-700 rounded text-sm shadow"
              >
                {border}
              </span>
            ))
          ) : (
            <span className="text-gray-400">None</span>
          )}
        </div>
      </div>
    </div>
  </div>
);
};

export default Country;
