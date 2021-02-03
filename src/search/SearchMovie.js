import React, { useState } from "react";
import MovieCard from "./movieCard";
import "./SearchStyles.css";

const SearchMovie = () => {
  // Searching for Movies
  const [query, setQuery] = useState("");
  //
  const [movies, setMovies] = useState([]);
  //
  const searchMovies = async (e) => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=d94af1ff039d5f85a5e16eb2c3c05d54&query=${query}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <header className="title">Search</header>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query"></label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e. Jurassic Park"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
};

export default SearchMovie;
