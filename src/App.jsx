import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full flex flex-col background relative items-center">
      <h1 className="bg-white rounded-lg text-center mt-[40px] w-11/12 text-3xl px-4 py-3 shadow-lg font-bold ">
        RANDOM GIFS
      </h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

// REACT_APP_GIPHY_API_KEY='GxqUEzgcQcGiQWXa2EAFDjsHHi9JdC2j'
