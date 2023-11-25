import React from "react";
import { AppNav } from "../components/AppNav";
import { Sidebar } from "../components/Sidebar";
import style from "./AppLayout.module.css";
import { Map } from "../components/Map";

export const AppLayout = () => {
  return (
    <div className={style.app}>
      <Sidebar />
      <Map />
    </div>
  );
};
