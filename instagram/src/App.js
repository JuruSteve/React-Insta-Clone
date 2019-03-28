import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeart,
  faComment,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import PostsPage from "./components/Post/PostsPage";
import withAuthenticate from "./components/Authentication/withAuthenticate";
import LoginPage from "./components/Login/LoginPage";
library.add(fab, faHeart, faComment, faSearch);

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loggedIn: false
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
      <ComponentFromWithAuthenticate
        data={this.state}
        updateLikes={this.updateLikes}
      />
    );
  }
}

// App.defaultProps = {
//   data: dummyData
// };
export default App;
