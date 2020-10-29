import React, { Component } from "react";
import Home from "./home";
import Todo from "./todo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Todo} />

          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    );
  }
}
