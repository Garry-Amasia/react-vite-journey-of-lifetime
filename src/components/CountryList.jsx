import React from "react";
import style from "./CountryList.module.css";
import Spinner from "./Spinner";
import { CityItem } from "./CityItem";
import Message from "./Message";
import CountryItem from "./CountryItem";

export const CountryList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;

  if (cities.length === 0) {
    return <Message message={"Please click city on the map first!"} />;
  }

  //   console.log(cities);
  //   const cityName = cities.map((single) => single.cityName);
  //   console.log(cityName);
  //   const uniques = [...new Set(cityName)];
  //   console.log(uniques);

  const uniques = cities.filter((obj, index) => {
    return index === cities.findIndex((o) => obj.country === o.country);
  });

  return (
    <ul className={style.countryList}>
      {uniques.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
      {/* {!cities.length && (
        <Message message={"Please click city on the map first!"} />
      )} */}
    </ul>
  );
};
