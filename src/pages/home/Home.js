import { useEffect, useState } from "react";
import Genre from "./Genre";
import "./home.css";

const TRENDING_URL =
  "https://api.themoviedb.org/3/trending/all/day?api_key=d94af1ff039d5f85a5e16eb2c3c05d54";

const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetch(TRENDING_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTrending(data.results);
      });
  }, []);

  return (
    <>
      <Genre />
    </>
  );
};

export default Home;
