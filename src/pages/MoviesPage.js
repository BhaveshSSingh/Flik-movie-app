import React, { useEffect, useState } from "react";
import Genre from "../pages/home/Genre";
import Emoji from "react-apple-emojis";
import Movie from "./home/Movie";
import Footer from "../components/navbar/Footer";

const TRENDING_MOVIES_URL =
  "https://api.themoviedb.org/3/trending/movie/week?api_key=d94af1ff039d5f85a5e16eb2c3c05d54";

const MoviesPage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetch(TRENDING_MOVIES_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTrendingMovies(data.results);
      });
  }, []);

  return (
    <div>
      <div className="trending-text">
        Trending Movies on FLICK <Emoji name="clapper-board" width={20} />{" "}
        <Emoji name="clapper-board" width={20} />{" "}
        <Emoji name="clapper-board" width={20} />
      </div>
      <div className="movie-container">
        {trendingMovies.length > 0 &&
          trendingMovies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
      <Footer />
    </div>
  );
};

export default MoviesPage;
