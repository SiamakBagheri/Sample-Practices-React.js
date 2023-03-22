import React, { Component } from "react";
import Comments from "./comments";
import Post from "./post";

class Content extends Component {
  render() {
    return (
      <div className="container">
        <Post />
        <Comments />
      </div>
    );
  }
}

export default Content;
