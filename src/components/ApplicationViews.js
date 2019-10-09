import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Login from './auth/Login'

import Home from './home/Home'
export default class ApplicationViews extends Component {
  isAuthenticated = () => localStorage.getItem("credentials") !== null
  render() {
    return (
      <React.Fragment>

        <Route
          exact path="/" render={props => {
            return <Home />
            // Remove null and return the component which will show news articles
          }}
        />
        <Route path="/login" render={props => {
          return <Login setUser={this.props.setUser} {...props} />
        }} />

        <Route
          path="/friends" render={props => {
            return <Friends />
            // Remove  and return the component which will show list of friends
          }}
        />

        <Route
          path="/messages" render={props => {
            return <Messages />
            // Remove  and return the component which will show the messages
          }}
        />

        <Route
          path="/tasks" render={props => {
            return <Tasks /> >
            // Remove  and return the component which will show the user's tasks
          }}
        />

      </React.Fragment>
    );
  }
}
