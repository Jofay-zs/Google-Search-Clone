import "./App.css";
import { useState } from "react";
import { ThemeContext } from "./context/Theme";
import { Route, Routes } from "react-router-dom";
import General from "./Layouts/General";
import Results from "./pages/Results";

function App() {
  const [isTheme, setIsTheme] = useState(false);
  return (
    <ThemeContext.Provider value={{isTheme, setIsTheme}}>
      <Routes>
        <Route path="/" element={<General />}>
          <Route index element={<Results />} />
          <Route path="search" element={<Results />} />
          <Route path="images" element={<Results />} />
          <Route path="news" element={<Results />} />
          <Route path="videos" element={<Results />} />
        </Route>
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
