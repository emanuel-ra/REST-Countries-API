import { useEffect, useId, useState } from "react";
import { Link } from 'react-router-dom';
import {
  SearchIcon,
  ChevronDown,
  ChevronUp,
} from "../components/icons/HeroIcons";
import Card from "../components/Card";
import useCountry from "../hooks/useCountry";
import Loading from "../components/Loading";
import { useMode } from "../hooks/useMode"

import { REGIONS } from "../constans/region";

function Countries() {
  const [search, setSearch] = useState();
  const [searchText, setSearchText] = useState("");
  const filterInputId = useId();
  const [dropdown, setDropdown] = useState(true);
  const dropdownOptions = useId();
  const {dark} = useMode()
  const { getCountries, countries, loading } = useCountry({ search });

  const handleSubmit = (event) => {
    if (event.keyCode === 13) setSearch(event.target.value);
  };

  const handreDropdown = (value) => {
    setSearch(value);
  };

  useEffect(() => {
    getCountries({ search });
  }, [search]);

  return (
    <>
      <div className="w-full flex flex-col md:flex-row justify-between">
        <div
          className={`input ${
            !dark ? "theme-input-ligth" : "theme-input-dark"
          }`}
        >
          <label htmlFor={filterInputId} className="cursor-pointer">
            <SearchIcon />
          </label>
          <input
            id={filterInputId}
            type="text"
            placeholder="Search for a country..."
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleSubmit}
          />
        </div>

        <div
          className={`dropdown relative ${
            !dark ? "dropdown-theme-ligth" : "dropdown-theme-dark"
          }`}
        >
          <button
            className="flex w-full"
            onClick={() => {
              setDropdown((prev) => !prev);
            }}
          >
            Filter By Region
            {!dropdown ? <ChevronUp /> : <ChevronDown />}
          </button>
          <ul
            id={dropdownOptions}
            className={` dropdown-options animate-fade animate-once animate-ease-in-out
                  ${
                    !dark
                      ? "dropdown-options-theme-ligth"
                      : "dropdown-options-theme-dark"
                  }
                  ${dropdown && "hidden"}
                `}
          >
            {REGIONS.map((region, index) => (
              <li className="w-full" key={index}>
                <a
                  href="#"
                  onClick={() => {
                    handreDropdown(region);
                  }}
                >
                  {region}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 transition-all ease-in-out delay-150">
        {loading ? (
          <Loading />
        ) : (
          countries
            .filter(({ name }) =>
              name
                .toLowerCase()
                .trim()
                .includes(searchText.toLowerCase().trim())
            )
            .map((country, index) => (
                <Link key={index} to={`/country/${country.name}`}>
                    <Card country={country} />
                </Link>
            ))
        )}
      </div>
    </>
  );
}

export default Countries;
