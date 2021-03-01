import Emoji from "react-apple-emojis";
import "./home.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../home/Movie";

const Genre = () => {
  const [Id, setId] = useState("27");
  const [movieData, setMovieData] = useState([]);

  console.log(movieData);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=d94af1ff039d5f85a5e16eb2c3c05d54&language=en-US&sort_by=popularity.desc&with_genres=${Id}`
        )
        .then((data) => setMovieData(data.data.results));
    };
    fetchData();
  }, [Id]);

  return (
    <>
      <div className="genre-container">
        <div className="genre-item" onClick={(e) => setId("35")}>
          <Emoji name="face-with-tears-of-joy" width={70} />
          Comedy
        </div>
        <div className="genre-item" onClick={(e) => setId("53")}>
          <Emoji name="face-screaming-in-fear" width={70} />
          Thriller
        </div>
        <div className="genre-item" onClick={(e) => setId("27")}>
          <Emoji name="ghost" width={70} />
          Horror
        </div>
        <div className="genre-item" onClick={(e) => setId("14")}>
          <Emoji name="unicorn" width={70} />
          Fantasy
        </div>
        <div className="genre-item" onClick={(e) => setId("18")}>
          <Emoji name="broken-heart" width={70} />
          Dramas
        </div>
        <div className="genre-item" onClick={(e) => setId("36")}>
          <Emoji name="prince" width={70} />
          History
        </div>
        <div className="genre-item" onClick={(e) => setId("80")}>
          <Emoji name="dollar-banknote" width={70} />
          Crime
        </div>
        <div className="genre-item" onClick={(e) => setId("16")}>
          <Emoji name="fox" width={70} />
          Cartoon
        </div>
      </div>
      <div className="movie-container">
        {movieData.length > 0 &&
          movieData.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
};

export default Genre;
