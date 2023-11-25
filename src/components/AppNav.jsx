import React from "react";
import style from "./AppNav.module.css";
import { NavLink } from "react-router-dom";

export const AppNav = () => {
  const { nav } = style;
  return (
    <nav className={nav}>
      <ul>
        <li>
          <NavLink to={"cities"}>cities</NavLink>
        </li>
        <li>
          <NavLink to={"countries"}>countries</NavLink>
        </li>
      </ul>
    </nav>
  );
};
