import { useEffect, useState } from "react";
import Genre from "./Genre";
import "./home.css";
import TrendingMovies from "./TrendingMovies";

const Home = () => {
  return (
    <>
      <Genre />
      <TrendingMovies />
    </>
  );
};

export default Home;
