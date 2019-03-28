import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";

export default class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      loggedIn: true
    };
  }
  handleChange = name => e => {
    this.setState({ [name]: e.target.value });
  };

  login = e => {
    console.log(this.state.username);
    localStorage.setItem("username", JSON.stringify(this.state.username));
    window.location.reload();
  };
  render() {
    return (
      <LoginPageStyles>
        <Global />
        <h1>Instagram</h1>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.login(e);
          }}
        >
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleChange("username")}
            value={this.state.username}
          />
          <input
            type="password"
            autoComplete="current-password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange("password")}
            value={this.state.password}
          />
          <button type="submit">LOGIN</button>
        </form>
      </LoginPageStyles>
    );
  }
}

const Global = createGlobalStyle`
   body{ 
    margin: 0;
    background: #fafafa;
   }
`;
const LoginPageStyles = styled.div`
  width: 365px;
  margin: 40px auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  border: 1px solid #80808033;
  h1 {
    margin: 22px auto 12px;
    font-family: cursive;
    font-size: 2.4rem;
  }
  form {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input {
      background: #e8f0fe;
      height: 1.4rem;
      font-size: 1rem;
      outline: 0;
    }
    button {
      background-color: #3897f0;
      border: 1px solid #3897f0;
      border-radius: 4px;
      color: #fff;
      position: relative;
      width: 50%;
      margin-top: 10px;
      padding: 8px;
      outline: 0;
    }
  }
`;
