import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <SearchContainer>
        <Search>
          <Logo>
            <FontAwesomeIcon icon={["fab", "instagram"]} size="3x" />
            <Divider>
              <span>Instagram</span>
            </Divider>
          </Logo>

          <SearchBarStyles>
            <input
              type="text"
              value={this.state.searchInput}
              onChange={this.handleChange}
              placeholder="search"
            />
          </SearchBarStyles>
          <div className="profile">
            <h4>profile</h4>
          </div>
        </Search>
      </SearchContainer>
    );
  }
}

const SearchContainer = styled.div`
  width: 500px;
  margin: 0 auto;
`;

const Search = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SearchBarStyles = styled.div`
  input {
    height: 30px;
    margin-top: 10px;
    font-size: 1.3rem;
    text-align: center;
  }
`;

const Logo = styled.div`
  display: flex;
`;

const Divider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 10px 10px 10px;
  border-left: 1px solid gray;
  height: 40px;
  span {
    margin-left: 15px;
    font-size: 1.5rem;
    font-family: cursive;
  }
`;
