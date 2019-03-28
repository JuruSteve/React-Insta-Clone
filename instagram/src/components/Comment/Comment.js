import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Comment = props => {
  return (
    <Comments>
      <CommentsText>
        <p>
          <span className="username">{props.comment.username}</span>
          {props.comment.text}
        </p>
      </CommentsText>
    </Comments>
  );
};

const Comments = styled.div`
  justify-content: baseline;
`;

const CommentsText = styled.div`
  display: flex;
  span {
    padding: 5px 10px 5px 0px;
    font-weight: 600;
  }
  p {
    text-align: left;
    font-weight: normal;
    margin: 0;
  }
`;

export default Comment;

Comment.propTypes = {
  comment: PropTypes.object,
  username: PropTypes.string,
  text: PropTypes.string
};
