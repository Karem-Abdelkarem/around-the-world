import { useEffect, useState } from "react";

const useFetchData = (country) => {
  const [result, setResult] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let url =
      "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region";
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(true);

    if (country) {
      url = `https://restcountries.com/v3.1/name/${country}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (country) {
          setResult(data[0]);
        } else {
          setResult(data);
          setFilteredCountries(data);
        }
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [country]);

  return {
    result,
    filteredCountries,
    isLoading,
    isError,
    setFilteredCountries,
  };
};
export default useFetchData;
