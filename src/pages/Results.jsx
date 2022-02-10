import React from "react";
import { useLocation } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  return <main className="">{location.pathname}</main>;
};

export default Results;
