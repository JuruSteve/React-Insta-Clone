import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Search.css";

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

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
            <input type="text" placeholder="search" />
          </div>
          <div className="profile">
            <h4>profile</h4>
          </div>
        </div>
      </div>
    );
  }
}
