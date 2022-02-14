import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useResultContext } from "../context/Result";
import Loading from "../components/Loading";
import ReactPlayer from "react-player";

const Results = () => {
  const location = useLocation();
  const {
    getResults,
    results: { results, image_results, entries: news },
    searchTerm,
    isLoading,
  } = useResultContext();

  useEffect(() => {
    if (searchTerm !== "") {
      if (location.pathname === "/videos") {
        getResults(`/search/q=${searchTerm} videos`);
      } else if (location.pathname === "/") {
        getResults(`/search/q=${searchTerm}`);
      } else if (location.pathname === "/news") {
        getResults(`/news/q=${searchTerm}`);
      } else {
        getResults(`/images/q=${searchTerm}`);
      }
    }
  }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/":
      return (
        <div className="grid grid-cols-2">
          <section className="col-span-2 lg:col-span-1">
            {results?.map(({ link, title, description }, index) => (
              <article key={index} className="my-4 w-full">
                <a href={link} rel="noreferrer">
                  <span className="text-sm">
                    {link.length > 30 ? link.substring(0, 30) : link}
                  </span>
                  <h6 className="text-xl hover:underline text-blue-600 dark:text-blue-400">
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
      return (
        <section className="flex flex-wrap justify-center items-center pr-20">
          {image_results?.map(({ image, link: { href, title } }, index) => (
            <a href={href} rel="noreferrer" className="p-5 sm:p-3" key={index}>
              <img src={image?.src} alt={image?.alt} />
              <h6 className="w-36 mt-2 text-sm break-words">{title}</h6>
            </a>
          ))}
        </section>
      );
    case "/news":
      return (
        <div className="grid grid-cols-2">
          <section className="col-span-2 lg:col-span-1">
            {news?.map(
              ({ link, links, id, source, title, published_parsed }) => (
                <article key={id} className="my-4 w-full">
                  <div>
                    <a
                      className="text-xl hover:underline text-blue-600 dark:text-blue-400"
                      href={link ? link : links?.[0].href}
                      rel="noreferrer"
                    >
                      {title}
                    </a>
                    <div className="flex justify-between w-full text-sm text-gray-600 dark:text-gray-400">
                      <a
                        href={source?.href}
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        Source: {source?.href}
                      </a>
                      <span>{`${published_parsed[2]}-${published_parsed[1]}-${published_parsed[0]}`}</span>
                    </div>
                  </div>
                </article>
              )
            )}
          </section>
        </div>
      );
    case "/videos":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 pr-20">
          {results?.map((video, index) => (
            <article key={index} className="flex justify-center items-center">
              {video?.additional_links?.[0].href && (
                <ReactPlayer
                  url={video?.additional_links?.[0].href}
                  controls
                  width="100%"
                  height="300px"
                />
              )}
            </article>
          ))}
        </div>
      );
    default:
      return "Error";
  }
};

export default Results;
