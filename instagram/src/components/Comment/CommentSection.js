import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";
import "./Comment.css";

const CommentSection = props => {
  return (
    <div className="comments">
      {props.postComments.map((el, i) => {
        return <Comment key={i} comment={el} />;
      })}
    </div>
  );
};

export default CommentSection;

CommentSection.propTypes = {
  postComments: PropTypes.array
};
