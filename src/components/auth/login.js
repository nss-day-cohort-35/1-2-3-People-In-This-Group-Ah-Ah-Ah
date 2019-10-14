import React, { Component } from "react";
import { Collapse, Button, Form, FormGroup, Label, Input,} from "reactstrap";
// import {useSpring, animated} from 'react-spring'

class Login extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        collapse: false,
        status: ""
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
        let keaton4President = {
            toggle: () => {
                console.log("what is this", this)

                this.setState({ collapse: !this.state.collapse });
            },
            onEntering: () => {
                this.setState({ status: 'Opening...' });
            },

            onEntered: () => {
                this.setState({ status: 'Opened' });
            },

            onExiting: () => {
                this.setState({ status: 'Closing...' });
            },

            onExited: () => {
                this.setState({ status: 'Closed' });
            }
        }
        return (
            <>
                <h1>Mood: {this.state.status}</h1>
                
                <Button color="warning" onClick={keaton4President.toggle} style={{ marginBottom: '1rem' }}>Login</Button>

                <Collapse isOpen={this.state.collapse}
                    onEntering={keaton4President.onEntering}
                    onEntered={keaton4President.onEntered}
                    onExiting={keaton4President.onExiting}
                    onExited={keaton4President.onExited}>



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
                </Collapse>
            </>
        );
    }
}
export default Login;
