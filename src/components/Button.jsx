import React from "react";
import style from "./Button.module.css";

export const Button = ({ children, onClick, type }) => {
  return (
    <button className={`${style.btn} ${style[type]}`} onClick={onClick}>
      {children}
    </button>
  );
};
