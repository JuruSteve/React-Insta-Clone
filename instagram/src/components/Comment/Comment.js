import React from "react";
import PropTypes from "prop-types";
import "./Comment.css";

const Comment = props => {
  return (
    <div className="comments">
      <div className="comment-text">
        <p>
          <span className="username">{props.comment.username}</span>
          {props.comment.text}
        </p>
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
