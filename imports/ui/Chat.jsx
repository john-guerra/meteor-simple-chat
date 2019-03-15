import React, { Component } from "react";

export default class Chat extends Component {
  render() {
    return (
      <div>
        <h2>Messages</h2>
        <div className="messsges" />
        <input type="text" placeholder="Enter your message" />
      </div>
    );
  }
}