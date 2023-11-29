import React from "react";
import style from "./Map.module.css";
import { useSearchParams } from "react-router-dom";

export const Map = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={style.mapContainer}>
      POSITION : {lat} , {lng}
      <button onClick={() => setSearchParams({ lat: 23, lng: 23 })}>
        change position
      </button>
    </div>
  );
};
