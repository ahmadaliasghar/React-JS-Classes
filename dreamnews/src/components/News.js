import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h1>News Headlines</h1>
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="First News"
              description="This is a sample news. We are testing our news item component"
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="First News"
              description="This is a sample news. We are testing our news item component"
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="First News"
              description="This is a sample news. We are testing our news item component"
            />
          </div>
        </div>
      </div>
    );
  }
}
