import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
// import Login from './auth/Login'
// import Home from './home/home'
import TaskEditForm from './task/TaskEditForm'
import TaskList from './task/TaskList'
// import taskManager from './task/TaskManager'
import TaskForm from './task/TaskForm'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>

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

        <Route
          exact path="/tasks" render={props => {
            if (this.isAuthenticated()) {
              return <TaskList {...props} tasks={this.state.tasks}
                doneTask={this.doneTask} />

            } else {
              return <Redirect to="/" />
            }
          }}
        />

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