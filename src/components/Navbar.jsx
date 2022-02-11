import React from "react";
import { useTheme } from "../context/Theme";

const Navbar = () => {
  const { isTheme, setIsTheme } = useTheme();
  return (
    <nav className="w-full pt-5 pb-2 items-center bg-gray-200 dark:bg-gray-800 px-5 sm:px-20 grid grid-cols-5">
      <section className="flex items-center bg-gray-100 dark:bg-gray-900 rounded-2xl pl-5 py-2 col-span-5 lg:col-span-3 sm:col-span-4">
        <div className="w-full flex">
          <input
            type="text"
            className="bg-transparent focus:border-none border-none outline-none font-bold text-lg w-full"
            placeholder="What are you looking for?"
          />
          <button className="text-xl mr-1">🔎</button>
        </div>
      </section>
      <section className="col-span-1 sm:col-span-1 lg:col-span-2 flex justify-end">
        <button
          onClick={() => {
            setIsTheme(!isTheme);
          }}
          className="text-3xl rounded-full animate-bounce dark:animate-pulse"
        >
          {isTheme ? "🌚" : "🌞"}
        </button>
      </section>
      <section className="col-span-4 lg:col-span-3 sm:col-span-4 flex justify-around mt-1">
        <button className="font-bold hover:border-b-2 border-gray-900 dark:border-gray-100">
          All🔎
        </button>
        <button className="font-bold hover:border-b-2 border-gray-900 dark:border-gray-100">
          Images🖼️
        </button>
        <button className="font-bold hover:border-b-2 border-gray-900 dark:border-gray-100">
          Videos📺
        </button>
        <button className="font-bold hover:border-b-2 border-gray-900 dark:border-gray-100">
          News📰
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
