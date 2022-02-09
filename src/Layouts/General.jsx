import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useTheme } from "../context/Theme";

const General = () => {
  const { isTheme } = useTheme();

  return (
    <div className={`${isTheme ? "dark" : ""} `}>
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 h-auto min-h-screen w-screen max-w-screen min-w-screen">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default General;
