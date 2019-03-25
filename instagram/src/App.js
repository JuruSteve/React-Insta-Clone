import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/Post/PostContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.data.map((el, i) => {
          return <PostContainer key={i} post={el} />;
        })}
      </div>
    );
  }
}

App.defaultProps = {
  data: dummyData
};
export default App;
