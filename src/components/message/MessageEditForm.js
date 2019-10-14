import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import API from "../../modules/APIManager";

class MessageEditForm extends Component {
    //set the initial state
    state = {
        userId: parseInt(sessionStorage.getItem("userId")),
        messageMain: "",
        loadingStatus: true,

    };
    // set state to value of input
    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }
    // update edited task object
    updateExistingMessage = event => {
        event.preventDefault()
        this.setState({ loadingStatus: true });
        const editedMessage = {
            id: this.props.match.params.messageId,
            messageMain: this.state.messageMain,
            userId: this.state.userId
        };
        // push edited task
        API.update("messages", editedMessage)
            .then(() => this.props.history.push("/messages"))
    }

    componentDidMount() {
        API.get("messages", this.props.match.params.messageId)
            .then(message => {
                this.setState({
                    messageMain: message.messageMain,
                    userId: message.userId
                });
            });
    }



    // render JSX to be displayed on the DOM
    render() {
        return (
            <>
                <Form onSubmit={this.updateExistingMessage} className="messageForm">
                    <FormGroup className="messageFormGroup">
                        <Label htmlFor="Message">Message</Label>
                        <Input
                            type="textarea"
                            required
                            className="messageFormInput"
                            onChange={this.handleFieldChange}
                            id="messageMain"
                            placeholder="Edit Message"
                            value={this.state.messageMain}></Input>
                    </FormGroup>
                    <Button
                        type="submit"
                        className="btn btn-primary">
                        Save Changes
                </Button>
                </Form>
            </>
        );
    }
}
export default MessageEditForm