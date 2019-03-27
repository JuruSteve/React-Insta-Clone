import React from "react";
import "./likes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LikesCount = props => {
  console.log(props);
  return (
    <div className="likes-section">
      <div className="like-buttons">
        <div className="likes">
          <FontAwesomeIcon
            icon="heart"
            prefix="far"
            onClick={() => props.updateLikes(props.postID)}
          />
        </div>
        <div className="comment-chat">
          <FontAwesomeIcon icon="comment" prefix="fas" />
        </div>
      </div>
      <div className="likes-count">
        <h5>{props.likes} likes</h5>
      </div>
    </div>
  );
};

export default LikesCount;
