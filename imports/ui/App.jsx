import React, {Component} from "react";
import { Meteor } from "meteor/meteor";
import Chat from "./Chat.jsx";
import NavBar from "./NavBar.jsx";

import { withTracker } from "meteor/react-meteor-data";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <h1>Meteor chat</h1>

        {
          Meteor.user() ?
            <Chat />  :
            <div>Please log in</div>
        }

        <br />
        <div>Made by John with effort</div>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    user: Meteor.user()
  };
})(App);


