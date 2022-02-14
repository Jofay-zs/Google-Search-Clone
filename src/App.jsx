import { useState } from "react";
import { ThemeContext } from "./context/Theme";
import { Route, Routes } from "react-router-dom";
import General from "./layouts/General";
import Results from "./pages/Results";
import { ResultContextProvider } from "./context/Result";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  const [isTheme, setIsTheme] = useState(false);
  return (
    <ThemeContext.Provider value={{ isTheme, setIsTheme }}>
      <ResultContextProvider>
        <Routes>
          <Route path="/" element={<General />}>
            <Route index element={<Results />} />
            <Route path="images" element={<Results />} />
            <Route path="news" element={<Results />} />
            <Route path="videos" element={<Results />} />
          </Route>
        </Routes>
      </ResultContextProvider>
    </ThemeContext.Provider>
  );
}

export default App;
