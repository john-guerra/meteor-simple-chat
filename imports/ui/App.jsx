import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import Chat from "./Chat.jsx";
import NavBar from "./NavBar.jsx";

import { withTracker } from "meteor/react-meteor-data";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const HomeComponent = () => {
  return (
    <div>
      <h1>Meteor chat</h1>

      {Meteor.user() ? <Chat /> : <div>Please log in</div>}

    </div>
  );
};

const AboutComponent = () =>
  <div>
    <h2>About</h2>
    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est saepe, ea minus quae ab nam impedit eaque. Adipisci expedita sit repudiandae, enim sapiente ipsam voluptas obcaecati veritatis, sunt eius nemo.</div>
  </div>;

const NotFoundPage = () =>
  <div>
    <h2>Page not found</h2>
    <div>We should call Suhas 🤷‍♀️</div>
  </div>;



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route exact path="/about" component={AboutComponent} />
            <Route component={NotFoundPage} />
          </Switch>
          <br />
          <div>Made by John with effort</div>


        </div>
      </Router>
    );
  }
}

export default withTracker(() => {
  return {
    user: Meteor.user()
  };
})(App);