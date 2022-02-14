import React from "react";
import { BallTriangle } from "react-loader-spinner";
import { useTheme } from "../context/Theme";

const Loading = () => {
  const { isTheme } = useTheme();
  return (
    <div className="absolute top-1/2 left-1/2">
      <BallTriangle
        heigth="100"
        width="100"
        color={isTheme ? "white" : "black"}
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loading;
