import { useParams } from "react-router";
import { ArrowLongLeft } from "../components/icons/HeroIcons";
import { useMode } from "../hooks/useMode";
import { NavLink } from "react-router-dom";
import useCountry from "../hooks/useCountry";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";

function Country() {
  const { dark } = useMode();
  let { n } = useParams();
  // const [search, setSearch] = useState(n);

  const { getCountries, countries, loading } = useCountry({ n });

  useEffect(() => {
    getCountries({ search: n });
  }, []);

  const {
    flags,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    languages,
    currencies,
    borders,
  } = countries[0];

  const currence = Object.values(currencies)[0].name;

  const langs = Object.values(languages).join(", ");

  return (
    <>
      <div className="flex">
        <NavLink
          to={`/`}
          className={`btn gap-2 px-6 py-2
        ${dark ? "btn-dark" : "btn-ligth"} `}
        >
          <ArrowLongLeft />
          Back
        </NavLink>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <section className="flag-wrapper grid grid-cols-1 lg:grid-cols-2 animate-fade-down animate-ease-in-out gap-14">
          <div className="flex items-center">
            <img src={flags.svg} className={``} alt={name} />
          </div>

          <div
            className={`flex flex-col justify-evenly ${
              dark ? "text-white" : ""
            } `}
          >
            <h1 className="font-bold text-2xl w-full p-0">{name}</h1>

            <div className="flex flex-col lg:flex-row justify-between ">
              <blockquote className="flex flex-col gap-2">
                <span className="flex gap-1">
                  <b>Native Name:</b>
                  {nativeName}
                </span>
                <span className="flex gap-1">
                  <b>Population:</b>
                  {population}
                </span>
                <span className="flex gap-1">
                  <b>Region:</b>
                  {region}
                </span>
                <span className="flex gap-1">
                  <b>Sub Region:</b>
                  {subregion}
                </span>
                <span className="flex gap-1">
                  <b>Capital:</b>
                  {capital}
                </span>
              </blockquote>

              <blockquote className="flex mt-10 lg:mt-0 flex-col gap-2">
                <span className="flex gap-1">
                  <b>Top Level Domain:</b>
                  {topLevelDomain}
                </span>
                <span className="flex gap-1">
                  <b>Currencies:</b>
                  {currence}
                </span>
                <span className="flex flex-wrap gap-1">
                  <b>Languages:</b>
                  {langs}
                </span>
              </blockquote>
            </div>

            <div className="mt-10 w-full flex flex-wrap gap-2">
              <b>Border Countries:</b>{" "}
              {borders.map((border, index) => (
                <NavLink
                  key={index}
                  to={`#`}
                  className={`btn px-3 py-1
             ${dark ? "btn-dark" : "btn-ligth"} `}
                >
                  {border}
                </NavLink>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Country;
