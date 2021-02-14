import React from "react";
import "./TrendingMovies.css";
import { useEffect, useState } from "react";
import Movie from "./Movie";
import Emoji from "react-apple-emojis";

const TRENDING_URL =
  "https://api.themoviedb.org/3/trending/all/day?api_key=d94af1ff039d5f85a5e16eb2c3c05d54";

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(TRENDING_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <>
      <h3 className="trending-text">
        Trending on FLICK
        <Emoji name="fire" width={20} />
        <Emoji name="fire" width={20} />
        <Emoji name="fire" width={20} />
      </h3>

      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
};

export default TrendingMovies;
