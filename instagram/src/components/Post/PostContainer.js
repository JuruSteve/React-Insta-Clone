import React from "react";
import styled from "styled-components";
import CommentSection from "../Comment/CommentSection";
import PropTypes from "prop-types";

const PostContainer = props => {
  return (
    <PostContainerStyles>
      <Header>
        <Thumbnail>
          <img src={props.post.thumbnailUrl} alt="" />
        </Thumbnail>
        <div className="username">
          <h5 className="username-text">{props.post.username}</h5>
        </div>
      </Header>
      <Picture>
        <img src={props.post.imageUrl} alt="" />
      </Picture>
      <CommentSection
        postComments={props.post.comments}
        likes={props.post.likes}
        updateLikes={props.updateLikes}
        postID={props.postID}
        post={props.post}
      />
    </PostContainerStyles>
  );
};

PostContainer.propTypes = {
  post: PropTypes.object
};

const Header = styled.div`
  display: flex;
  padding: 5px;
  justify-content: flex-start;
`;

const PostContainerStyles = styled.div`
  width: 500px;
  margin: 0 auto;
  box-shadow: 0px 0px 0.8px 0px grey;
`;
const Thumbnail = styled.div`
  img {
    width: 50px;
    height: auto;
    border-radius: 50px;
    padding: 10px;
  }
`;
const Picture = styled.div`
  img {
    width: 500px;
    height: auto;
  }
`;

export default PostContainer;
