import React from "react";
import CommentSection from "../Comment/CommentSection";
import PropTypes from "prop-types";
import "./Post.css";
import LikesCount from "../Likes/LikesCount";

const PostContainer = props => {
  return (
    <div className="post-container">
      <div className="header">
        <div className="thumbnail">
          <img src={props.post.thumbnailUrl} alt="" />
        </div>
        <div className="username">
          <h5>{props.post.username}</h5>
        </div>
      </div>
      <div className="picture">
        <img src={props.post.imageUrl} alt="" />
      </div>
      <CommentSection
        postComments={props.post.comments}
        likes={props.post.likes}
        updateLikes={props.updateLikes}
        postID={props.postID}
      />
    </div>
  );
};

PostContainer.propTypes = {
  post: PropTypes.object
};

export default PostContainer;
