import React, { Component } from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";
import styled from "styled-components";
import CommentInput from "./CommentInput";
import LikesCount from "../Likes/LikesCount";

class CommentSection extends Component {
  constructor(props) {
    super();
    this.state = {
      comments: props.postComments,
      text: ""
    };
  }

  handleChange = e => {
    this.setState({ text: e.target.value });
  };
  addNewComment = (e, commentText, index) => {
    e.preventDefault();
    const comment = { username: "anon", text: commentText };
    if (localStorage.getItem("username") !== null) {
      comment.username = JSON.parse(localStorage.getItem("username"));
      console.log(comment.username);
    }
    this.setState({ comments: [...this.state.comments, comment], text: "" });
  };

  componentDidMount() {
    if (localStorage.getItem("comments") === null) {
      const comments = [];
      comments.push(this.state.comments);
      localStorage.setItem("comments", JSON.stringify(comments[0]));
    } else {
      const savedComments = JSON.parse(localStorage.getItem("comments"));
      this.setState({ comments: savedComments, text: "" });
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.comments !== nextState.commemts) {
      localStorage.setItem("comments", JSON.stringify(nextState.comments));
    }
    return true;
  }
  render() {
    let commentIndex;
    return (
      <CommentContainer>
        <LikesCount
          updateLikes={this.props.updateLikes}
          likes={this.props.likes}
          postID={this.props.postID}
        />
        {this.state.comments.map((el, i) => {
          commentIndex = i;
          // console.log(commentIndex);
          return <Comment key={i} comment={el} />;
        })}
        <CommentInputStyles>
          <CommentInput
            text={this.state.text}
            commentIndex={commentIndex}
            handleChange={this.handleChange}
            addNewComment={this.addNewComment}
            postID={this.props.postID}
          />
        </CommentInputStyles>
      </CommentContainer>
    );
  }
}

const CommentContainer = styled.div`
  padding: 10px;
`;

const CommentInputStyles = styled.div`
  padding: 10px;
`;

CommentSection.propTypes = {
  postComments: PropTypes.array
};

export default CommentSection;
