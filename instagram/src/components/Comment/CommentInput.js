import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CommentInput = props => {
  // console.log(props.postID);
  return (
    <FormStyles>
      <form
        onSubmit={e => {
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
    </FormStyles>
  );
};

const FormStyles = styled.div`
  form > input {
    width: 95%;
    font-size: 1rem;
    margin: 0 auto;
    padding: 10px;
    border: 0;
    border-top: 0.5px solid #80808040;
  }
`;

CommentInput.propTypes = {};

export default CommentInput;
