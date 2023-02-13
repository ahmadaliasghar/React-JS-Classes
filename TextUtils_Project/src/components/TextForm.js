import React, { useState } from "react";

export const TextForm = (props) => {
  const [text, setText] = useState("Enter Text Here");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const addRandomText = () => {
    let newText =
      "Hello Everyone! This website is developed by Ahmad Ali Asghar. Good Luck to all of You...";
    setText(newText);
  };
  const speakText = () => {
    let newText = new SpeechSynthesisUtterance();
    newText.text = text;
    window.speechSynthesis.speak(newText);
  };
  const handleReverseText = () => {
    let reversedText = text.split("");
    reversedText = reversedText.reverse();
    reversedText = reversedText.join("");
    reversedText = reversedText.replace(",", "");
    setText(reversedText);
  };
  const handleBinaryClick = () => {
    let newText = textToBinary(text);
    setText(newText);
  };

  const textToBinary = (text) => {
    let binaryString = "";
    for (let i = 0; i < text.length; i++) {
      let char = text.charCodeAt(i);
      let binaryRepresentation = char.toString(2);
      binaryRepresentation = binaryRepresentation.padStart(8, "0");
      binaryString += binaryRepresentation;
    }
    return binaryString;
  };
  const handleAsciiClick = () => {
    let asciiString = "";
    for (let i = 0; i < text.length; i++) {
      let char = text.charCodeAt(i);
      asciiString += char + " ";
    }
    setText(asciiString);
  };
  const handleHexClick = () => {
    let hexString = "";
    for (let i = 0; i < text.length; i++) {
      let char = text.charCodeAt(i);
      let hexRepresentation = char.toString(16).toUpperCase();
      hexRepresentation = hexRepresentation.padStart(2, "0");
      hexString += hexRepresentation;
    }
    setText(hexString);
  };

  const handleClear = () => {
    setText("");
  };
  const handleUpChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container">
        <form>
          <div className="form-group my-3">
            <h1  style = {{color: props.mode === 'dark' ? 'white':'black'}}>{props.textTitle}</h1>
            <textarea
              className="form-control"
              value={text}
              onChange={handleUpChange}
              rows="8"
              style = {{backgroundColor: props.mode === 'dark' ? '#6B728E':'white', color: props.mode === 'dark' ? 'white':'black'}}
            ></textarea>
          </div>
        </form>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-3" onClick={handleLowClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary my-3" onClick={addRandomText}>
          Add Some Random Text
        </button>
        <button className="btn btn-primary mx-1 my-3" onClick={speakText}>
          Speak
        </button>
        <button className="btn btn-primary my-3" onClick={handleReverseText}>
          Reverse Text
        </button>
        <button
          className="btn btn-primary mx-1 my-3"
          onClick={handleAsciiClick}
        >
          Convert to ASCII
        </button>
        <button className="btn btn-primary my-3" onClick={handleHexClick}>
          Convert to Hexadecimal
        </button>
        <button
          className="btn btn-primary mx-1 my-3"
          onClick={handleBinaryClick}
        >
          Convert To Binary
        </button>
        <button className="btn btn-outline-primary my-3" onClick={handleClear}  style = {{color: props.mode === 'dark' ? 'white':'black'}}>
          Clear
        </button>
      </div>


      <div className="container my-3">
        <h2  style = {{color: props.mode === 'dark' ? 'white':'black'}}>Your Text Summary</h2>
        <p  style = {{color: props.mode === 'dark' ? 'white':'black'}}>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p  style = {{color: props.mode === 'dark' ? 'white':'black'}}>Time to Read {text.split(" ").length * 0.008} Minutes</p>
        <h2  style = {{color: props.mode === 'dark' ? 'white':'black'}}>Preview</h2>
        <p  style = {{color: props.mode === 'dark' ? 'white':'black'}}>{text.length > 0? text: "Enter something in the above textbox to preview it here!!!"}</p>
      </div>
    </>
  );
};
