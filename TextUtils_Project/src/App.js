import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import About from "./components/About";
import { Navbar } from "./components/Navbar";
import { TextForm } from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light"); //darkmode enabled or not

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#282A3A";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="Text Utilities by Ahmad"
          textAbout="About Text Utilities"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Routes>
          <Route exact={true} path="/about" element={<About />} />
          <Route
            exact={true} path="/"
            element={
              <TextForm
                textTitle="Enter the text you want to analyze:"
                mode={mode}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
