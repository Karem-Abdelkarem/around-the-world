const CountryCard = ({ name, population, region, capital, flag }) => {
  return (
    <a href="#">
      <div className="h-full gap-4 rounded-md bg-white p-3 pb-9 shadow-md xl:w-[264px] dark:bg-gray-800">
        <img
          className="mb-4 h-40 w-full rounded-md"
          src={flag}
          alt="placeholder"
          loading="lazy"
        />
        <h2 className="mb-4 ml-3 text-lg font-extrabold">{name}</h2>
        <div className="ml-3 flex flex-col gap-2">
          <p>
            <span className="font-semibold">Population: </span>
            <span className="font-light">{population}</span>
          </p>
          <p>
            <span className="font-semibold">Region: </span>
            <span className="font-light">{region}</span>
          </p>
          <p>
            <span className="font-semibold">Capital: </span>
            <span className="font-light">{capital}</span>
          </p>
        </div>
      </div>
    </a>
  );
};
export default CountryCard;
