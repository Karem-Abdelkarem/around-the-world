import ShowMessage from "../components/ShowMessage";
import SearchInput from "../components/SearchInput";
import RegionMenu from "../components/RegionMenu";
import CountryList from "../components/CountryList";
import useFetchData from "../useFetchData";

const Home = () => {
  const {
    isError,
    isLoading,
    result,
    setFilteredCountries,
    filteredCountries,
  } = useFetchData();

  return (
    <>
      {isError && <ShowMessage message="Something went wrong" />}
      {isLoading && <ShowMessage message="Loading countries data..." />}
      {!isError && !isLoading && (
        <>
          <section className="flex flex-col items-center justify-between gap-10 md:h-14 md:flex-row md:gap-0">
            <SearchInput
              countriesList={result}
              filterCountriesList={setFilteredCountries}
            />
            <RegionMenu
              countriesList={result}
              filterCountriesList={setFilteredCountries}
            />
          </section>
          <CountryList data={filteredCountries} />
        </>
      )}
    </>
  );
};
export default Home;
