import { Link, useParams } from "react-router";
import useFetchData from "../useFetchData";
import ShowMessage from "../components/ShowMessage";

const Country = () => {
  const { country } = useParams();
  const { result, isError, isLoading } = useFetchData(country);

  return (
    <>
      {isError && <ShowMessage message="Something went wrong" />}
      {isLoading && <ShowMessage message="Loading countries data..." />}
      {!isError && !isLoading && (
        <section className="pb-8">
          <Link
            to="/"
            className="mb-16 inline-block rounded-md bg-white p-3 md:mb-20 dark:bg-gray-800 dark:fill-white"
          >
            <svg
              className="fill-[#111827] dark:fill-white"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="call-made">
                <path
                  id="Shape"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.89267 3.53553L7.07118 4.71405L3.18209 8.60313L18.0313 8.60313L18.0313 10.253L3.18209 10.253L7.07118 14.1421L5.89267 15.3206L0.000111646 9.42809L5.89267 3.53553Z"
                  //fill="#111827"
                />
              </g>
            </svg>
          </Link>
          <div className="grid gap-11 lg:grid-cols-2 lg:gap-36">
            <img src={result?.flags?.svg} alt="Country Flag" />
            <div>
              <h1 className="mb-4 text-3xl font-extrabold lg:mb-7">
                {result?.name?.common}
              </h1>
              <div className="flex flex-col gap-8 md:gap-40 lg:flex-row">
                <div className="flex flex-col gap-5">
                  <p>
                    <span className="font-semibold">Population: </span>
                    <span className="font-light">
                      {parseInt(result?.population).toLocaleString()}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Region: </span>
                    <span className="font-light">{result?.region}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Sub Region: </span>
                    <span className="font-light">{result?.subregion}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Capital: </span>
                    <span className="font-light">{result?.capital}</span>
                  </p>
                </div>
                <div className="flex flex-col gap-5">
                  <p>
                    <span className="font-semibold">Top Level Domain: </span>
                    <span className="font-light">
                      {result?.tld?.join(", ")}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Currencies: </span>
                    <span className="font-light">
                      {result?.currencies &&
                        Object.keys(result?.currencies)
                          .map(
                            (currencie) =>
                              `${result?.currencies[currencie].name}`,
                          )
                          .join(", ")}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Languages: </span>
                    <span className="font-light">
                      {result?.languages &&
                        Object.values(result.languages)
                          .map((lang) => `${lang}`)
                          .join(", ")}
                    </span>
                  </p>
                </div>
              </div>
              {/* <div className="mt-16 flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-0">
                <p className="mr-2 font-semibold">Border Countries: </p>
                <div className="flex gap-5">
                  <div className="rounded-sm bg-white px-7 py-1 text-sm font-light shadow dark:bg-gray-800">
                    Libya
                  </div>
                  <div className="rounded-sm bg-white px-7 py-1 text-sm font-light shadow dark:bg-gray-800">
                    Libya
                  </div>
                  <div className="rounded-sm bg-white px-7 py-1 text-sm font-light shadow dark:bg-gray-800">
                    Libya
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default Country;
