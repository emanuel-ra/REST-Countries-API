import { useParams } from "react-router";
import { ArrowLongLeft } from "../components/icons/HeroIcons";
import { useMode } from "../hooks/useMode";
import { Link,NavLink  } from "react-router-dom";
import useCountry from "../hooks/useCountry";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import Error404 from "../components/Error404";

function Country() {
  const { dark } = useMode();
  let { n } = useParams();
  // const [search, setSearch] = useState(n);

  const { getCountries, countries, loading,error } = useCountry({ n });
  
  useEffect(() => {
    getCountries({ search: n });
  }, []);


  if(!countries.length)
    return <Error404 />


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
  
  const currence = currencies ? Object.values(currencies)[0].name:'';

  let langs = !error ? Object.values(languages).join(", "):'';

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
              <blockquote className="flex flex-col w-1/2 gap-2">
                <span>
                  <b>Native Name:</b> {nativeName}
                </span>
                <span>
                  <b>Population:</b> {population}
                </span>
                <span>
                  <b>Region:</b> {region}
                </span>
                <span>
                  <b>Sub Region:</b> {subregion}
                </span>
                <span>
                  <b>Capital:</b> {capital}
                </span>
              </blockquote>

              <blockquote className="flex mt-10  w-1/2 lg:mt-0 flex-col gap-2">
                <span>
                  <b>Top Level Domain:</b> {topLevelDomain}
                </span>
                <span>
                  <b>Currencies:</b> {currence}
                </span>
                <span>
                  <b>Languages:</b> {langs}
                </span>
              </blockquote>
            </div>

            <div className="mt-10 w-full flex flex-wrap gap-2">
              <b>Border Countries:</b>
              {borders?.map((border, index) => (
                <a key={index} href={`/country/${border}`}                 
                  className={`btn px-3 py-1 ${dark ? "btn-dark" : "btn-ligth"} `}
                >
                  {border}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Country;
