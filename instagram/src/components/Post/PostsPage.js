import React, { Component } from "react";
import SearchBar from "../Search/SearchBar";
import PostContainer from "./PostContainer";

class PostsPage extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="app">
        <SearchBar />
        <div className="posts-section">
          {this.props.data.data.map((el, i) => {
            return (
              <PostContainer
                key={i}
                post={el}
                postID={i}
                updateLikes={this.props.updateLikes}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default PostsPage;
