import React, { Component } from "react";

export default class Navigation extends Component {
  render() {
    return (
      <nav id="navbar">
        <ul>
          <li><a href="./home">Home</a></li>
          <li><a href="./about">About</a></li>
          <li><a href="./contact">Contact</a></li>
        </ul>
      </nav>
    )
  }
}
