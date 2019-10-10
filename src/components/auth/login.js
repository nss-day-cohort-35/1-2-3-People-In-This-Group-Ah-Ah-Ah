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
        let credentials = { username: this.state.username, email: this.state.email, password: this.state.password }
        this.props.setUser(credentials);
        this.props.history.push("/home");
    };

    render() {
        return (
            <>
                <Form onSubmit={this.handleLogin}>
                    <FormGroup>
                        <Label for="username">UserName</Label>
                        <Input
                            onChange={this.handleFieldChange}
                            type="username"
                            name="username"
                            id="username"
                            required=""
                            autoFocus=""
                            placeholder="Enter UserName"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Email">Email</Label>
                        <Input
                            onChange={this.handleFieldChange}
                            type="email"
                            name="email"
                            id="email"
                            required=""
                            autoFocus=""
                            placeholder="Enter Email"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            onChange={this.handleFieldChange}
                            type="password"
                            name="password"
                            id="password"
                            required=""
                            autoFocus=""
                            placeholder="Enter Password"
                        />
                    </FormGroup>
                    <Button color="danger">Let the Blood Bath Begin</Button>
                </Form>
            </>
        );
    }
}
export default Login;