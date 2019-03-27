import React from "react";
import PropTypes from "prop-types";
import "./Comment.css";

const CommentInput = props => {
  // console.log(props.postID);
  return (
    <form
      onSubmit={e => {
        // e.preventDefault();
        // props.comments.forEach((el, i) => {
        //   console.log("onSubmit", el, i);
        // });
        console.log(props.text, props.postID);
        props.addNewComment(e, props.text, props.postID);
      }}
    >
      <input
        type="text"
        placeholder="Add a Comment..."
        value={props.text}
        onChange={props.handleChange}
      />
    </form>
  );
};

CommentInput.propTypes = {};

export default CommentInput;
