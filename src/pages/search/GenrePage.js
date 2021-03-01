import React from "react";
import Genre from "../home/Genre";
import Emoji from "react-apple-emojis";
import Footer from "../../components/navbar/Footer";

export default function GenrePage() {
  return (
    <div>
      <div className="Genre-text">
        Discover New Movies on FLICK{" "}
        <Emoji name="man-detective-light-skin-tone" width={20} />{" "}
        <Emoji name="man-detective-light-skin-tone" width={20} />{" "}
        <Emoji name="man-detective-light-skin-tone" width={20} />
      </div>{" "}
      <Genre />
      <Footer />
    </div>
  );
}
