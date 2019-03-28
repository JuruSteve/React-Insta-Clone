import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import "./Search.css";

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ""
    };
  }
  static propTypes = {};
  handleChange = e => {
    this.setState({ searchInput: e.target.value });
    this.filterPosts(e);
  };
  filterPosts = e => {
    const postDOMEls = Array.from(document.querySelectorAll(".post-container"));
    postDOMEls.forEach(post => {
      const postChildEls = Array.from(post.children);
      if (postChildEls[0].innerText.indexOf(e.target.value) === -1) {
        post.style.display = "none";
        console.log("no match", postChildEls[0].innerText, post.style);
      } else {
        post.style.display = "block";
      }
    });
  };

  render() {
    return (
      <div className="search-container">
        <div className="search">
          <div className="logo">
            <FontAwesomeIcon icon={["fab", "instagram"]} size="3x" />
            <div className="divider">
              <span>Instagram</span>
            </div>
          </div>

          <div className="search-bar">
            <input
              type="text"
              value={this.state.searchInput}
              onChange={this.handleChange}
              placeholder="search"
            />
          </div>
          <div className="profile">
            <h4>profile</h4>
          </div>
        </div>
      </div>
    );
  }
}
