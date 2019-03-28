import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LikesCount = props => {
  // console.log(props);
  return (
    <LikeSection>
      <LikesButton>
        <Likes>
          <FontAwesomeIcon
            icon="heart"
            prefix="far"
            onClick={() => props.updateLikes(props.postID)}
          />
        </Likes>
        <CommentChat>
          <FontAwesomeIcon icon="comment" prefix="fas" />
        </CommentChat>
      </LikesButton>
      <LikesCountStyles className="likes-count">
        <h5>{props.likes} likes</h5>
      </LikesCountStyles>
    </LikeSection>
  );
};

const LikeSection = styled.div`
  padding: 0 10px;
`;

const LikesCountStyles = styled.div`
  text-align: left;
  h5 {
    margin: 0;
  }
`;

const LikesButton = styled.div`
  display: flex;
`;

const Likes = styled.div`
  padding-left: 0;
  padding: 10px;
`;

const CommentChat = styled.div`
  padding: 10px;

  svg {
    background: "white";
  }
`;

export default LikesCount;
