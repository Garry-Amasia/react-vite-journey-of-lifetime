import React from "react";
import style from "./CityItem.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    // weekday: "long",
    // timeZone: "Australia/Sydney",
  }).format(new Date(date));

export const CityItem = ({ singleCity }) => {
  const { cityName, emoji, date } = singleCity;
  return (
    <li className={style.cityItem}>
      <span className={style.emoji}>{emoji}</span>
      <h3 className={style.name}>{cityName}</h3>
      <time className={style.date}>{formatDate(date)}</time>
      <button className={style.deleteBtn}>&times;</button>
    </li>
  );
};
