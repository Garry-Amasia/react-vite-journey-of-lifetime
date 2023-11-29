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

  const uniques = cities.filter((obj, index) => {
    return index === cities.findIndex((o) => obj.country === o.country);
  });

  return (
    <ul className={style.countryList}>
      {/* {cities.length === 0 && (
        <Message message={"Please click city on the map first!"} />
      )} */}
      {uniques.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
      {/* {!cities.length && (
        <Message message={"Please click city on the map first!"} />
      )} */}
    </ul>
  );
};

// https://bobbyhadz.com/blog/javascript-remove-duplicates-from-array-of-objects
