import React from "react";
import Comment from "./comment";

const Comments = () => {
  return (
    <div className="comments">
      <p>Comments:</p>
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default Comments;
