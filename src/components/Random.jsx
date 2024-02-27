import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
// import axios from "axios";
// import { useState, useEffect } from "react";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);

  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const { data } = await axios.get(url);
  //   const imgSource = data.data.images.downsized_large.url;
  //   setGif(imgSource);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { gif, loading, fetchData } = useGif();

  function clickHandler() {
    fetchData();
  }

  return (
    <div className="w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] shadow-2xl">
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold ">
        A Random Gif
      </h1>

      {loading ? <Spinner /> : <img src={gif} alt="" width="450" />}

      <button
        type="button"
        onClick={clickHandler}
        class="w-9/12 text-white shadow-md hover:shadow-lg bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-5"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
