import "./App.css";
import { Navbar } from "./components/Navbar";
import { TextForm } from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="My TextUtils" textAbout="About TextUtils" />
      <TextForm textTitle="Enter the text you want to analyze:"/>
    </>
  );
}

export default App;
