import React, { Component } from "react";
import PropTypes from "prop-types";

import { withTracker } from "meteor/react-meteor-data";
import { Messages } from "../api/messages.js";

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
    };
  }

  renderMessages() {
    return this.props.messages.map(m => <div key={m._id}>{m.message}</div>);
  }

  onChange(evt) {
    console.log("change", evt.target.value);
    this.setState({
      message: evt.target.value
    });
  }

  onKey(evt) {
    if (evt.key === "Enter") {
      Messages.insert(
        {
          message: this.state.message
        },
        (err, res) => {
          if (err) {
            alert("There was error inserting check the console");
            console.log(err);
            return;
          }

          console.log("Message inserted", res);
          this.setState({
            message: ""
          });
        }
      );
    }
  }

  render() {
    console.log("Messages", this.props.messages);
    return (
      <div>
        <h2>Messages</h2>
        <div className="messsges">{this.renderMessages()}</div>
        <label htmlFor="inMessage">
          Message:{" "}
          <input
            type="text"
            placeholder="Enter your message"
            value={this.state.message}
            onChange={this.onChange.bind(this)}
            onKeyPress={this.onKey.bind(this)}
          />
        </label>
      </div>
    );
  }
}

Chat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default withTracker(() => {
  return {
    messages: Messages.find({}).fetch()
  };
})(Chat);