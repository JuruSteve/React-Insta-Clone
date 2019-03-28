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
    // e.preventDefault();
    console.log(this.state.username);
    localStorage.setItem("username", JSON.stringify(this.state.username));
    window.location.reload();
  };
  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.login(e);
          }}
        >
          <input
            type="text"
            name="username"
            onChange={this.handleChange("username")}
            value={this.state.username}
          />
          <input
            type="text"
            name="password"
            onChange={this.handleChange("password")}
            value={this.state.password}
          />
          <button
            // onSubmit={e => {
            //   e.preventDefault();
            //   this.login(e);
            // }}
            type="submit"
          >
            LOGIN
          </button>
        </form>
      </div>
    );
  }
}
