import Emoji from "react-apple-emojis";
import "./home.css";

const Genre = () => {
  return (
    <>
      <div className="genre-container">
        <span className="genre-item">
          <Emoji name="face-with-tears-of-joy" width={70} />
          Comedy
        </span>
        <span className="genre-item">
          <Emoji name="face-screaming-in-fear" width={70} />
          Thriller
        </span>
        <span className="genre-item">
          <Emoji name="ghost" width={70} />
          Horror
        </span>
        <span className="genre-item">
          <Emoji name="unicorn" width={70} />
          Fantasy
        </span>
        <span className="genre-item">
          <Emoji name="broken-heart" width={70} />
          Dramas
        </span>
        <span className="genre-item">
          <Emoji name="prince" width={70} />
          History
        </span>
        <span className="genre-item">
          <Emoji name="dollar-banknote" width={70} />
          Crime
        </span>
        <span className="genre-item">
          <Emoji name="fox" width={70} />
          Cartoon
        </span>
      </div>
      <div className="movie-container"></div>
    </>
  );
};

export default Genre;
