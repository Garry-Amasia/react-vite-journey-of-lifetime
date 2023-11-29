import React from "react";
import style from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

export const Map = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div
      className={style.mapContainer}
      onClick={() => {
        // navigate("countries");
        navigate("form");
      }}
    >
      POSITION : {lat} , {lng}
      <button onClick={() => setSearchParams({ lat: 23, lng: 23 })}>
        change position
      </button>
    </div>
  );
};
