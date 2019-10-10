import React, { Component } from "react"
import APIManager from "../..//modules/APIManager"
import { Collapse, Button, Form, FormGroup, Label, Input } from "reactstrap";
import API from "../..//modules/APIManager";


class Register extends Component {

    state = {
        username: "",
        email: "",
        password: "",
        collapse: false,
        status: ""

    }

    handleFieldChange = e => {
        let stateToChange = {}
        stateToChange[e.target.id] = e.target.value
        this.setState(stateToChange)
    }

    registerUser = (newUser) => {
        return API.post(newUser, "users")
            .then(() => API.getAll())
            .then(users => this.setState({
                users: users
            }))
    }


    registerVampire = e => {
        e.preventDefault()

        APIManager.getAll("users").then(arrayOfUsers => {
            let isMatch = arrayOfUsers.find(result => result.username.toLowerCase() === this.state.username.toLowerCase())
            if (isMatch) {
                window.alert("Dracula says that a vampire stole that name!! You must drink that vamps blood or enter a new userName")
            } else if (arrayOfUsers.find(result => result.email.toLowerCase() === this.state.email.toLowerCase())) {
                window.alert("This email already exists")
            } else if (arrayOfUsers.find(result => result.password.toLowerCase() === this.state.password.toLowerCase())) {
                window.alert("This password already exists")
            } else if (this.state.username === "" || this.state.email === "" || this.state.password === "") {
                window.alert("You left a field blank!")
            } else {
                let newUser = {
                    userName: this.state.username,
                    email: this.state.email
                }

            this.registerVampire()
            console.log(isMatch)
                this.props.APIManager.post("user")
                let username = this.state.username
                let email = this.state.email
                let password = ""

            }
        })
        
    }
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
                {/* <h1>Mood: {this.state.status}</h1> */}
              
                
                <Button color="warning" onClick={keaton4President.toggle} style={{ marginBottom: '1rem' }}>Register</Button>

                <Collapse isOpen={this.state.collapse}
                    onEntering={keaton4President.onEntering}
                    onEntered={keaton4President.onEntered}
                    onExiting={keaton4President.onExiting}
                    onExited={keaton4President.onExited}>



                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label for="regUsername">UserName</Label>
                            <Input
                            className="flexLoginInput"
                                onChange={this.handleFieldChange}
                                type="regUsername"
                                name="regUsername"
                                id="regUsername"
                                required=""
                                autoFocus=""
                                placeholder="Enter UserName"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="regEmail">Email</Label>
                            <Input
                            className="flexLoginInput"
                                onChange={this.handleFieldChange}
                                type="regEmail"
                                name="regEmail"
                                id="regEmail"
                                required=""
                                autoFocus=""
                                placeholder="Enter Email"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="regPassword">Password</Label>
                            <Input
                            className="flexLoginInput"
                                onChange={this.handleFieldChange}
                                type="regPassword"
                                name="regPassword"
                                id="regPassword"
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
} export default Register





