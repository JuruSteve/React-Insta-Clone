import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/Post/PostContainer";
import SearchBar from "./components/Search/SearchBar";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeart,
  faComment,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab, faHeart, faComment, faSearch);

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    this.setState({ data: dummyData });
  }

  updateLikes = id => {
    let posts = this.state.data;
    posts = posts.map((post, i) => {
      if (i === id) {
        post.liked = !post.liked;
        if (post.liked) {
          post.likes += 1;
        } else {
          post.likes -= 1;
        }
        return post;
      } else {
        return post;
      }
    });

    this.setState({ data: posts });
  };

  render() {
    return (
      <div className="App">
        <SearchBar posts={this.state.data} />
        <div className="posts-section">
          {this.state.data.map((el, i) => {
            return (
              <PostContainer
                key={i}
                post={el}
                postID={i}
                updateLikes={this.updateLikes}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

// App.defaultProps = {
//   data: dummyData
// };
export default App;
