import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 grid grid-cols-6 px-5 sm:px-20 gap-2 text-gray-700 dark:text-gray-300 py-2">
      <section className="col-span-6 sm:col-span-3">
        <h6 className="font-bold text-lg">Resources</h6>
        <div className="flex justify-around flex-col lg:flex-row">
          <div className="bg-gray-100 dark:bg-gray-900 rounded-md py-2 px-4 font-bold w-full sm:w-auto my-1 text-center">
            <a
              className="hover:text-gray-500"
              href="https://github.com/Jofay-zs/Google-Search-Clone"
              target="_blank"
              rel="noreferrer"
            >
              Project's code
            </a>
          </div>
          <div className="bg-gray-100 dark:bg-gray-900 rounded-md py-2 px-4 font-bold w-full sm:w-auto my-1 text-center">
            <a
              className="hover:text-gray-500"
              href="https://jofay-zs.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Creator
            </a>
          </div>
          <div className="bg-gray-100 dark:bg-gray-900 rounded-md py-2 px-4 font-bold w-full sm:w-auto my-1 text-center">
            <a
              className="hover:text-gray-500"
              href="https://rapidapi.com/apigeek/api/google-search3?utm_source=youtube.com%2FJavaScriptMastery&utm_medium=DevRel&utm_campaign=DevRel"
              target="_blank"
              rel="noreferrer"
            >
              Google Search API
            </a>
          </div>
        </div>
      </section>
      <section className="col-span-6 sm:col-span-3 flex flex-col justify-center items-center sm:mx-10">
        <h6 className="font-bold text-lg">About this page</h6>
        <p>
          This web application made with React is a 'google search clone', where
          I use the Google Search API.
        </p>
      </section>
      <section className="col-span-6 sm:col-span-6 w-full flex justify-center items-center font-bold mb-2">
        2022 by @Jofay-zs.
      </section>
    </footer>
  );
};

export default Footer;

// copyright
// github
// personal website
// about the page
