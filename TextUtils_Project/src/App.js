import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import { Navbar } from "./components/Navbar";
import { TextForm } from "./components/TextForm";

function App() {
  const [mode, setMode] = useState('light'); //darkmode enabled or not

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
    }
    else {
      setMode('light');
    }
  }

  return (
    <>
      <Navbar title="Text Utilities by Ahmad" textAbout="About Text Utilities" mode = {mode} toggleMode={toggleMode} />
      <TextForm textTitle="Enter the text you want to analyze:"/>
      {/* <About/> */}
    </>
  );
}

export default App;
