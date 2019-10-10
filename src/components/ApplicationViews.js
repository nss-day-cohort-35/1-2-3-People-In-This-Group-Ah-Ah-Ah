import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Login from './auth/Login'
import Home from './home/home'
import TaskEditForm from './task/TaskEditForm'
import TaskList from './task/TaskList'
import TaskForm from './task/TaskForm'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>

        <Route
          exact path="/home" render={props => {
            return <Home />
            // Remove null and return the component which will show news articles
          }}
        />
        <Route path="/auth" render={props => {
          return <Login setUser={this.props.setUser} {...props} />
        }} />

        <Route
          exact path="/" render={props => {
            return null
            // Remove null and return the component which will show news articles
          }}
        />

        <Route
          path="/friends" render={props => {
            return null
            // Remove null and return the component which will show list of friends
          }}
        />

        <Route
          path="/messages" render={props => {
            return null
            // Remove null and return the component which will show the messages
          }}
        />

        <Route exact path="/tasks" render={props => {
          if (this.props.user) {
            return <TaskList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route path="/tasks/new" render={(props) => {
          return <TaskForm {...props}
            addTask={this.addTask}
          />
        }} />

        <Route path="/tasks/:taskId(\d+)/edit" render={props => {
          return <TaskEditForm {...props} tasks={this.state.tasks} updateTask={this.updateTask} />
        }} />

      </React.Fragment>
    );
  }
}
export default ApplicationViews