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
    results: { results, image_results, entries },
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
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {image_results?.map(({ image, link: { href, title } }, index) => (
            <article key={index} className="my-3 mx-5">
              <a href={href} rel="noreferrer" className="">
                <img
                  src={image?.src}
                  alt={image?.alt}
                  className="bg-cover bg-center"
                />
                <h6 className="text-sm break-words">{title}</h6>
              </a>
            </article>
          ))}
        </section>
      );
    case "/news":
      return (
        <div className="grid grid-cols-2">
          <section className="col-span-2 lg:col-span-1">
            {entries?.map(
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
        <div>
          {results.map((video, index) => (
            <article key={index}>
              <ReactPlayer
                url={video.additional_links?.[0].href}
                controls
                width="355px"
                height="200px"
              />
            </article>
          ))}
        </div>
      );
    default:
      return "Error";
  }
};

export default Results;
