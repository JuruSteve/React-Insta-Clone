import React from "react";
import PropTypes from "prop-types";

const withAuthenticate = PostsPage => LoginPage =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      };
    }
    componentDidMount() {
      if (localStorage.getItem("username") !== null) {
        const isUserLoggedIn = JSON.parse(localStorage.getItem("username"));
        // console.log(isUserLoggedIn);
        if (isUserLoggedIn) {
          this.setState({ loggedIn: true });
        }
      }
    }
    render() {
      return this.state.loggedIn ? (
        <PostsPage {...this.props} />
      ) : (
        <LoginPage />
      );
    }
  };

withAuthenticate.propTypes = {};

export default withAuthenticate;
