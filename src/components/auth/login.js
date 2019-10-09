import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class Login extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  handleLogin = e => {
    e.preventDefault();

    localStorage.setItem(
      "credentials",
      JSON.stringify({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      })
    );
    this.props.history.push("/home");
  };

  render() {
    return (
      <>
        <Form>
          <FormGroup>
            <Label for="username">UserName</Label>
            <Input
              type="username"
              name="username"
              id="username"
              placeholder="Enter UserName"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
            />
          </FormGroup>
        </Form>
      </>
    );
  }
}
export default Login;
