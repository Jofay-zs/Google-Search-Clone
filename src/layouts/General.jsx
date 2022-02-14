import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useTheme } from "../context/Theme";

const General = () => {
  const { isTheme } = useTheme();

  return (
    <div className={`${isTheme ? "dark" : ""} `}>
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 max-w-screen min-h-screen">
        <Navbar />
        <main className="px-5 sm:px-10 lg:pl-20 lg:pr-0 py-5 min-h-screen">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default General;
