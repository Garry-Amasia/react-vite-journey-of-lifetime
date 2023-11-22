import React from "react";
import { PageNav } from "../components/PageNav";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <PageNav />
      <h1 className="test">Journey of lifetime</h1>

      <Link to={"/app"}>Go back to app..</Link>
    </>
  );
};
