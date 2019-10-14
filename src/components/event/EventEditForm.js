import React, { Component } from "react"
import API from "../../modules/APIManager"
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class EventEditForm extends Component {
    //set the initial state
    state = {
        title: "",
        date: "",
        location: "",
        img: "",
        loadingStatus: true,
        event: ""
      }

    // set state to value of input
    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }
    // update edited task object
    updateExistingEvent = event => {
        event.preventDefault()
        this.setState({ loadingStatus: true });
        const editedForm = {
            id: this.props.match.params.eventId,
            title: this.state.title,
            date: this.state.date,
            location: this.state.location,
            img: this.state.img,
            loadingStatus: false
        };
        // push edited task
        API.update("events", editedForm)
            .then(() => this.props.history.push("/events"))
    }

    componentDidMount() {
        API.get("events", this.props.match.params.eventId)
            .then(event => {
                this.setState({
                    title: event.title,
                    date:  event.date,
                    location: event.location,
                    img: event.img,
                    loadingStatus: false
                });
            });
    }



    // render JSX to be displayed on the DOM
    render() {
        return (
            <>
                <Form onSubmit={this.updateExistingEvent} className="taskForm">
                    <FormGroup className="taskFormGroup">
                        <Label htmlFor="task">Event</Label>
                        <Input
                            type="text"
                            required
                            className="taskFormInput"
                            onChange={this.handleFieldChange}
                            id="title"
                            value={this.state.title}
                            placeholder="Task Name"></Input>
                    </FormGroup>
                    <FormGroup className="dateInput">
                        <Label htmlFor="completeDate">Date</Label>
                        <Input
                            type="date"
                            required
                            className="dateForm"
                            onChange={this.handleFieldChange}
                            id="date"
                            value={this.state.date}
                        />
                    </FormGroup>
                    <FormGroup className="dateInput">
                        <Label htmlFor="completeDate">Location</Label>
                        <Input
                            type="location"
                            required
                            className="dateForm"
                            onChange={this.handleFieldChange}
                            id="location"
                            value={this.state.location}
                        />
                    </FormGroup><FormGroup className="dateInput">
                        <Label htmlFor="completeDate">Img</Label>
                        <Input
                            type="img"
                            required
                            className="dateForm"
                            onChange={this.handleFieldChange}
                            id="taskEditCompleteDate"
                            value={this.state.img}
                        />
                    </FormGroup>
                    <Button
                        type="submit"
                        className="btn btn-primary">
                        Submit
                </Button>
                </Form>
            </>
        );
    }
}
export default EventEditForm