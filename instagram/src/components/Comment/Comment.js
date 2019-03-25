import React from "react";
import PropTypes from "prop-types";
import "./Comment.css";

const Comment = props => {
  return (
    <div className="comment-container">
      <div className="username">{props.comment.username}</div>
      <div className="single-comment">{props.comment.text}</div>
      <div className="comment-input">
        <input type="text" placeholder="Enter a comment" />
      </div>
    </div>
  );
};

export default Comment;

Comment.propTypes = {
  comment: PropTypes.object,
  username: PropTypes.string,
  text: PropTypes.string
};
