import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import ArticleList from "./article/ArticleList";
import ArticleForm from "./article/ArticleForm";
import Login from "./auth/Login";
import Home from './home/home';



class ApplicationViews extends Component {
  isAuthenticated = () => localStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>

        <Route
          exact path="/home" render={props => {
            return <Home />
            // Remove null and return the component which will show news articles
          }}
        />
        <Route
          path="/articles" render={props => {
            return <ArticleList {...props}/>
          }}
        />
        <Route path="/articles/new" render={(props) => {
           return <ArticleForm {...props} />
        }} />

        <Route path="/auth" render={props => {
          return <Login setUser={this.props.setUser} {...props} />
        }} />

        {/* <Route
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
            return <Tasks/>
            // Remove  and return the component which will show the user's tasks
          }}
        /> */}

      </React.Fragment>
    );
  }
}

export default ApplicationViews
