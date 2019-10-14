import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import API from "../../modules/APIManager"



class MessageForm extends Component {
    state = {
        // userId: parseInt(localStorage.getItem("userID")),
        messageMain: "",
        date: "",
        collapse: false,
        loadingStatus: true,
        status: ""
    }
    // sets state to value of input field
    handleFieldChange = event => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange);
    };

    // Make a new task object
    constructNewMessage = event => {
        event.preventDefault()
        const newMessage = {
            messageMain: this.state.messageMain,
            date: this.state.date,
            // userId: this.state.userId,

        }
        API.post("messages", newMessage)
            .then(() => this.props.history.push("/messages"));
    }

    // build JSX that will display on DOM
    render() {
        // let keaton4President = {
        //     toggle: () => {

        //         this.setState({ collapse: !this.state.collapse });
        //     },
        //     onEntering: () => {
        //         this.setState({ status: 'Opening...' });
        //     },

        //     onEntered: () => {
        //         this.setState({ status: 'Opened' });
        //     },

        //     onExiting: () => {
        //         this.setState({ status: 'Closing...' });
        //     },

        //     onExited: () => {
        //         this.setState({ status: 'Closed' });
        //     }
        // }

        return (
            <>
                {/* <Collapse isOpen={this.state.collapse}
                    onEntering={keaton4President.onEntering}
                    onEntered={keaton4President.onEntered}
                    onExiting={keaton4President.onExiting}
                    onExited={keaton4President.onExited}> */}
                <Form onSubmit={this.constructNewMessage} className="messageForm">
                    <FormGroup className="messageFormGroup">
                        <Label htmlFor="message">Message</Label>
                        <Input
                            type="textarea"
                            required
                            className="messageFormInput"
                            onChange={this.handleFieldChange}
                            id="messageMain"
                            placeholder="New Message"></Input>
                    </FormGroup>
                    <Button
                        type="submit"
                        className="btn btn-primary">
                        Submit
                </Button>
                </Form>
                {/* </Collapse> */}
            </>
        )
    }
}

export default MessageForm