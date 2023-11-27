import React from "react";
import style from "./CityList.module.css";
import Spinner from "./Spinner";
import { CityItem } from "./CityItem";
import Message from "./Message";

export const CityList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;

  // if (cities.length === 0) {
  //   return <Message message={"Please click city on the map first!"} />;
  // }

  return (
    <ul className={style.cityList}>
      {cities.map((singleCity) => (
        <CityItem singleCity={singleCity} key={singleCity.id} />
      ))}
      {!cities.length && (
        <Message message={"Please click city on the map first!"} />
      )}
    </ul>
  );
};
