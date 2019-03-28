import React, { Component } from "react";
import "./Login.css";

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
      <div className="login-page">
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
      </div>
    );
  }
}
