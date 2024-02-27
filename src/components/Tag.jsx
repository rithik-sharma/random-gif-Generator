import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState("");

  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const { data } = await axios.get(url);
  //   const imgSource = data.data.images.downsized_large.url;
  //   setGif(imgSource);
  //   setLoading(false);
  // }

  const { gif, loading, fetchData } = useGif(tag);
  // useEffect(() => {
  //   fetchData();
  // }, []);

  function clickHandler() {
    fetchData(tag);
  }

  function changeHandler(event) {
    setTag(event.target.value);
  }

  return (
    <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] shadow-2xl mb-10">
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold ">
        Random {tag} Gif
      </h1>

      {loading ? <Spinner /> : <img src={gif} alt="" width="450" />}

      <input
        type="text"
        className=" bg-white w-9/12 text-lg py-2 rounded-lg mb-[4px] text-center shadow-inner "
        onChange={changeHandler}
      />

      <button
        type="button"
        onClick={clickHandler}
        value={tag}
        class="w-9/12 shadow-md hover:shadow-lg text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-5"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
