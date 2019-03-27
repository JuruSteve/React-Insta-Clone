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

  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="posts-section">
          {this.state.data.map((el, i) => {
            return <PostContainer key={i} post={el} />;
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
