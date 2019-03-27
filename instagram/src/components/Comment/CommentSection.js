import React, { Component } from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";
import "./Comment.css";
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
  addNewComment = (e, index) => {
    e.preventDefault();
    const comment = { username: "anon", text: e.target.value };
    let oldComment = this.state.comments;
    oldComment = oldComment.map((com, i) => {
      if (index === i) {
        console.log(com);
        // oldComment.push(comment)
      }
      return com;
    });
    console.log(e, index);
  };
  // newLike = ()=> {
  //   this.state.commets.likes = this.setState({
  //     comments: comments.likes{

  //     }
  //   })
  //   this.setState(()=>{
  //     return {
  //       comments: {
  //         ...this.state.comments,
  //         likes: this.setState({})
  //       }
  //     }
  //   })
  // }
  render() {
    let commentIndex;
    return (
      <div className="comment-container">
        <LikesCount
          updateLikes={this.props.updateLikes}
          likes={this.props.likes}
          postID={this.props.postID}
        />
        {this.state.comments.map((el, i) => {
          commentIndex = i;
          console.log(commentIndex);
          return <Comment key={i} comment={el} />;
        })}
        <div className="comment-input">
          <CommentInput
            text={this.state.text}
            commentIndex={commentIndex}
            handleChange={this.handleChange}
            addNewComment={this.addNewComment}
          />
        </div>
      </div>
    );
  }
}
CommentSection.propTypes = {
  postComments: PropTypes.array
};

export default CommentSection;
