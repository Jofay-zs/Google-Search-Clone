import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useResultContext } from "../context/Result";
import Loading from "../components/Loading";
import ReactPlayer from "react-player";

const Results = () => {
  const location = useLocation();
  const { getResults, results, searchTerm, isLoading } = useResultContext();

  useEffect(() => {
    getResults("/search/q=javascript&num=10");
  }, []);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/":
      return (
        <div className="grid grid-cols-2">
          <section className="col-span-2 lg:col-span-1">
            {results?.results?.map(({ link, title, description }, index) => (
              <article key={index} className="my-3 w-full">
                <a href={link} rel="noreferrer">
                  <span className="text-sm">
                    {link.length > 30 ? link.substring(0, 30) : link}
                  </span>
                  <h6 className="text-xl hover:underline text-gray-600 dark:text-gray-400">
                    {title}
                  </h6>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {description}
                  </p>
                </a>
              </article>
            ))}
          </section>
        </div>
      );
    case "/images":
      return "IMAGES";
    case "/news":
      return "NEWS";
    case "/videos":
      return "VIDEOS";
    default:
      return "Error";
  }
};

export default Results;
