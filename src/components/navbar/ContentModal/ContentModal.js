import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ContentModal({ children }) {
  const [content, setContent] = useState();
  const [video, setVideo] = useState();
  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/?api_key=d94af1ff039d5f85a5e16eb2c3c05d54&language=en-US`
    );
    setContent(data);
  };
  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/videos?api_key=d94af1ff039d5f85a5e16eb2c3c05d54`
    );
    console.log(data);
    setVideo(data.results[0]?.key);
  };
  useEffect(() => {
    fetchData();
    fetchVideo();
  }, []);

  return <div className="movie">{children}</div>;
}
