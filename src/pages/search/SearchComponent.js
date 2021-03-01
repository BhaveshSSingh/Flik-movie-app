import React, { useState } from "react";
import Movie from "../home/Movie";
import Emoji from "react-apple-emojis";

export default function SearchComponent() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState("");

  const url = `https://api.themoviedb.org/3/search/movie?api_key=d94af1ff039d5f85a5e16eb2c3c05d54&language=en-US&query=${query}&page=1&include_adult=false`;

  const resultSearch = async (e) => {
    if (query.length > 0) {
      e.preventDefault();

      try {
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setSearchResults(data.results);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <form className="form" onSubmit={resultSearch}>
        <input
          className="input"
          placeholder="ie.Avengers"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <button className="button" type="submit">
          <Emoji name="magnifying-glass-tilted-left" width={30} />
        </button>
      </form>
      <div className="movie-container">
        {searchResults.length > 0 &&
          searchResults.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
}
