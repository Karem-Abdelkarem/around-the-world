import CountryCard from "./CountryCard";

const CountryList = ({ data }) => {
  return (
    <section className="mt-8 grid grid-cols-1 justify-between gap-y-12 sm:grid-cols-2 sm:gap-x-16 md:mt-12 md:grid-cols-[repeat(2,minmax(0,auto))] lg:grid-cols-[repeat(3,minmax(0,auto))] xl:grid-cols-[repeat(4,minmax(0,auto))] xl:gap-[70px]">
      {data.map((country) => (
        <CountryCard
          key={country.name.official}
          name={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital}
          flag={country.flags.svg}
        />
      ))}
    </section>
  );
};
export default CountryList;
