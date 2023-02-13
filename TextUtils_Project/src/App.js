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
      document.body.style.backgroundColor = '#282A3A';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar title="Text Utilities by Ahmad" textAbout="About Text Utilities" mode = {mode} toggleMode={toggleMode} />
      <TextForm textTitle="Enter the text you want to analyze:" mode = {mode}/>
      {/* <About/> */}
    </>
  );
}

export default App;
