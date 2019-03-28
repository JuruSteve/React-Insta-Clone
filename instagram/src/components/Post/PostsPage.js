import React, { Component } from "react";
import SearchBar from "../Search/SearchBar";
import PostContainer from "./PostContainer";
import styled from "styled-components";

class PostsPage extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <App>
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
      </App>
    );
  }
}
const App = styled.div`
  height: 850px;
  overflow-y: scroll;
`;

export default PostsPage;
