import React, { Component } from "react";
import PropTypes from "prop-types";

import { withTracker } from "meteor/react-meteor-data";
import { Messages } from "../api/messages.js";


class Chat extends Component {
  renderMessages() {
    return this.props.messages.map( m =>
      <div key={m._id}>{m.message}</div>
    );
  }

  render() {
    console.log("Messages", this.props.messages);
    return (
      <div>
        <h2>Messages</h2>
        <div className="messsges">
          { this.renderMessages() }
        </div>
        <input type="text" placeholder="Enter your message" />
      </div>
    );
  }
}

Chat.propTypes = {
  messages : PropTypes.arrayOf(PropTypes.object).isRequired
};

export default withTracker(() => {
  return {
    messages: Messages.find({}).fetch()
  };
}
)(Chat);