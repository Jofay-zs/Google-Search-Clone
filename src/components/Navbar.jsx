import React from "react";
import { useTheme } from "../context/Theme";

const Navbar = () => {
  const { isTheme, setIsTheme } = useTheme();
  return (
    <div>
      <button
        onClick={() => {
          setIsTheme(!isTheme);
        }}
      >
        Navbar
      </button>
    </div>
  );
};

export default Navbar;
