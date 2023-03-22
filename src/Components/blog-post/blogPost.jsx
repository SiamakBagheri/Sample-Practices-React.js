import React, { Component } from "react";
import Aside from "./aside";
import Content from "./content";
import "./style.css";

class BlogPost extends Component {
  render() {
    return (
      <>
        <Aside />
        <Content />
      </>
    );
  }
}

export default BlogPost;
