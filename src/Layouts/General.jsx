import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useTheme } from "../context/Theme";

const General = () => {
  const { isTheme } = useTheme();

  return (
    <div className={`${isTheme ? "dark" : ""} `}>
      <div className="">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default General;
