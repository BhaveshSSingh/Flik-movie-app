import React from "react";
import ContentModal from "../../components/navbar/ContentModal/ContentModal";
import "./TrendingMovies.css";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};
const Movie = ({
  overview,
  poster_path,
  vote_average,
  original_name,
  original_title,
}) => {
  return (
    <>
      <ContentModal>
        <img src={IMG_API + poster_path} alt={original_title} />
        <div className="movie-info">
          <h3>{original_title ? original_title : original_name}</h3>
          <span className={`tag ${setVoteClass(vote_average)}`}>
            {vote_average}
          </span>{" "}
        </div>
        <div className="movie-overview">
          <h2>Overview</h2>
          <p>{overview}</p>
        </div>
      </ContentModal>
    </>
  );
};

export default Movie;
