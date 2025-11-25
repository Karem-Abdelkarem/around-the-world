import Select from "react-select";

const RegionMenu = ({ countriesList, filterCountriesList }) => {
  const options = [
    { value: "all regions", label: "All regions" },
    { value: "africa", label: "Africa" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "oceania", label: "Oceania" },
  ];
  const isDark = document.documentElement.classList.contains("dark");

  const handleRegionChange = (e) => {
    const region = e.label;
    const filteredCountries =
      region === "All regions"
        ? countriesList
        : countriesList.filter((country) => country.region === region);
    filterCountriesList(filteredCountries);
  };

  return (
    <Select
      onChange={handleRegionChange}
      defaultValue={options[0]}
      options={options}
      classNames={{
        input: () => "dark:!text-gray-100",
        singleValue: () => "dark:!text-gray-100",
        control: () =>
          "flex h-12 items-center justify-between gap-12 rounded-md !border-none pr-2 pl-4 shadow dark:!bg-gray-800",
        placeholder: () => "dark:!text-gray-100",
        indicatorSeparator: () => "hidden",
        option: ({ isFocused }) =>
          `dark:!text-gray-100 ${
            isFocused ? "bg-gray-200 dark:bg-gray-700" : ""
          }`,
        menu: () => "bg-gray-100 dark:!bg-gray-800 dark:text-gray-100",
      }}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary25: isDark ? "#000" : "#deebff",
        },
      })}
    />
  );
};
export default RegionMenu;
