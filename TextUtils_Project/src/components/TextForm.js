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
            <h1>{props.textTitle}</h1>
            <textarea
              className="form-control"
              value={text}
              onChange={handleUpChange}
              rows="8"
            ></textarea>
          </div>
        </form>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLowClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-outline-primary float-end" onClick={handleClear}>
          Clear
        </button>
      </div>

      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>Time to Read {text.split(" ").length* 0.008} Minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
};
