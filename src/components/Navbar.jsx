import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/Theme";
import { useResultContext } from "../context/Result";

const Navbar = () => {
  const { isTheme, setIsTheme } = useTheme();
  const [text, setText] = useState("");
  const { setSearchTerm } = useResultContext();
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue, setSearchTerm]);

  return (
    <nav className="w-full pt-5 pb-2 items-center bg-gray-200 dark:bg-gray-800 px-5 sm:px-20 grid grid-cols-5">
      <section className="flex items-center bg-gray-100 dark:bg-gray-900 rounded-2xl pl-5 py-2 col-span-5 lg:col-span-3 sm:col-span-4">
        <div className="w-full flex">
          <input
            type="text"
            value={text}
            className="bg-transparent focus:border-none border-none outline-none font-bold text-lg w-full"
            placeholder="What are you looking for?"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          {text && (
            <button
              type="button"
              className="text-xl mr-1"
              onClick={() => {
                setText("");
              }}
            >
              ❌
            </button>
          )}
          {text && (
            <button
              type="button"
              className="text-xl mr-1"
              onClick={() => {
                setDebouncedValue(text);
              }}
            >
              🔎
            </button>
          )}
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
        <Link
          to="/"
          className="font-bold hover:border-b-2 border-gray-900 dark:border-gray-100"
        >
          All🔎
        </Link>
        <Link
          to="/images"
          className="font-bold hover:border-b-2 border-gray-900 dark:border-gray-100"
        >
          Images🖼️
        </Link>
        <Link
          to="/videos"
          className="font-bold hover:border-b-2 border-gray-900 dark:border-gray-100"
        >
          Videos📺
        </Link>
        <Link
          to="/news"
          className="font-bold hover:border-b-2 border-gray-900 dark:border-gray-100"
        >
          News📰
        </Link>
      </section>
    </nav>
  );
};

export default Navbar;
