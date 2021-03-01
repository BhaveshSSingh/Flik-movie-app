import React, { useEffect, useState } from "react";
import Emoji from "react-apple-emojis";
import Footer from "../components/navbar/Footer";
import Movie from "./home/Movie";

const TvShows = () => {
  const [trendingTv, setTrendingTV] = useState("");
  const TRENDING_TV_URL =
    "https://api.themoviedb.org/3/trending/tv/week?api_key=d94af1ff039d5f85a5e16eb2c3c05d54";

  useEffect(() => {
    fetch(TRENDING_TV_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setTrendingTV(data.results);
      });
  }, []);

  return (
    <div>
      <div className="trending-text">
        Trending SHOWS on FLICK <Emoji name="television" width={20} />{" "}
        <Emoji name="television" width={20} />{" "}
        <Emoji name="television" width={20} />
      </div>
      <div className="movie-container">
        {trendingTv.length > 0 &&
          trendingTv.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
      <Footer />
    </div>
  );
};

export default TvShows;
