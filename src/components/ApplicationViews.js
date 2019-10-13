import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import ArticleList from "./article/ArticleList"
import ArticleForm from "./article/ArticleForm"
import ArticleEditForm from "./article/ArticleEditForm"
import EventList from "./event/EventList"
import EventForm from "./event/EventForm"
import EventDetails from "./event/EventDetails"
import EventEditForm from "./event/EventEditForm"

import TaskList from "./task/TaskList"
import TaskForm from "./task/TaskForm"
import TaskEditForm from "./task/TaskEditForm"

import FriendList from "./friend/FriendList"

import MessageList from "./message/MessageList"
import MessageForm from "./message/MessageForm"
import MessageEditForm from "./message/MessageEditForm"

import Home from './home/Home'
import Login from './auth/login'


class ApplicationViews extends Component {
  isAuthenticated = () => localStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />

        {/* Make sure you add the `exact` attribute here */}
        <Route exact path="/" render={props => {
          if (this.props.user) {
            return <Home {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />


        {/* Article Routes */}
        <Route exact path="/articles" render={props => {
          if (this.props.user) {
            return <ArticleList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/articles/new" render={(props) => {
          return <ArticleForm {...props} />
        }} />
        <Route path="/articles/:articleId(\d+)/edit" render={props => {
          return <ArticleEditForm {...props} />
        }} />



        {/* Event Routes */}
        <Route exact path="/events" render={props => {
          if (this.props.user) {
            return <EventList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/events/new" render={(props) => {
          return <EventForm {...props} />
        }} />
        <Route path="/events/:eventId(\d+)/edit" render={props => {
          return <EventEditForm {...props} />
        }} />
        <Route exact path="/events/:eventId(\d+)" render={(props) => {
          return <EventDetails eventId={parseInt(props.match.params.eventId)} {...props} />
        }} />


        {/* Task Routes */}
        <Route exact path="/tasks" render={props => {
          // if (this.props.user) {
          return <TaskList {...props} />
          // } else {
          //   return <Redirect to="/login" />
          // }
        }} />
        <Route path="/tasks/new" render={(props) => {
          return <TaskForm {...props} />
        }} />
        <Route path="/tasks/:taskId(\d+)/edit" render={props => {
          return <TaskEditForm {...props} />
        }} />



        {/* Friend Routes */}
        <Route exact path="/friends" render={props => {
          if (this.props.user) {
            return <FriendList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />



        {/* Message Routes */}
        <Route exact path="/message" render={props => {
          if (this.props.user) {
            return <MessageList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/message/new" render={(props) => {
          return <MessageForm {...props} />
        }} />
        <Route path="/message/:messageId(\d+)/edit" render={props => {
          return <MessageEditForm {...props} />
        }} />
        <Route path="/login" render={props => {
          return <Login setUser={this.props.setUser} {...props} />
        }} />
      </React.Fragment>
    )
  }
}
export default ApplicationViews
