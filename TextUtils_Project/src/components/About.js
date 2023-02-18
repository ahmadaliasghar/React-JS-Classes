import React from "react";

export default function About(props) {
  return (
    <>
      <div className="container my-5 py-3 rounded border" style={{
                backgroundColor: props.mode === "dark" ? "#6B728E" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}>
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          About Us
        </h1>
        <div className="accordion" id="accordionExample" tyle={{
                backgroundColor: props.mode === "dark" ? "#6B728E" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{
                  backgroundColor: props.mode === "dark" ? "#6B728E" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                <strong>About</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
              style={{
                backgroundColor: props.mode === "dark" ? "#6B728E" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              <div className="accordion-body">
                Text utilities is a website that offers a variety of tools and
                resources for manipulating, formatting, and analyzing text.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={{
                backgroundColor: props.mode === "dark" ? "#6B728E" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}>
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={{
                  backgroundColor: props.mode === "dark" ? "#6B728E" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                <strong>Objective</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
              style={{
                backgroundColor: props.mode === "dark" ? "#6B728E" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              <div className="accordion-body">
                Our Objective is to meet our user's need, make easy for them to to analyze their texts.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={{
                backgroundColor: props.mode === "dark" ? "#6B728E" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}>
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={{
                  backgroundColor: props.mode === "dark" ? "#6B728E" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                <strong>Features</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
              style={{
                backgroundColor: props.mode === "dark" ? "#6B728E" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              <div className="accordion-body">
                <ul>
                  <li><strong>Text Formatting: </strong>These tools allow you to modify the way your text appears, such as adjusting the font size, font style, or formatting the text in different ways, such as bold, italic, underline or strikethrough.</li>
                <li><strong>Word Count: </strong>This feature allows you to quickly and easily calculate the number of words in a given block of text. This is especially useful for writers, bloggers, and journalists who need to meet specific word count requirements.</li>
                <li><strong>Text Analysis: </strong>This feature provides various analysis tools such as readability score, sentiment analysis, and keyword density checker. These analysis tools help to evaluate the overall readability and the mood of your text content.</li>
                <li><strong>Case Conversion: </strong>These tools enable you to convert text between uppercase and lowercase, or convert the first letter of each word to uppercase.</li>
                <li><strong>Text Comparison: </strong>These tools allow you to compare two different pieces of text, highlighting the differences and similarities between them.</li>
                <li><strong>Text Translation: </strong>This feature allows you to translate text from one language to another.</li>
                <li><strong>Random Text Generation: </strong>These tools generate random text to help with filling placeholders or generate sample data for testing purposes.</li>
                <li><strong>Text-to-Speech: </strong>These tools convert text into audio, which can be helpful for people who have difficulty reading or for language learners.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
