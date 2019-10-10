import React, { Component } from 'react';
import { Collapse, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import APIManager from "../../modules/APIManager"


class TaskForm extends Component {
    state = {
        userId: "",
        title: "",
        date: "",
        complete: "",
        collapse: false,
        status: ""
    };
    // sets state to value of input field
    handleFieldChange = event => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange);
    };

    // Make a new task object
    constructNewTask = event => {
        event.preventDefault()
        const newTask = {
            title: this.state.taskId,
            date: this.state.date,
            complete: false,
            userId: parseInt(localStorage.getItem("userID"))
        }
        APIManager.post("tasks", newTask)
            .then(() => this.props.history.push("/tasks"));
    }

    // build JSX that will display on DOM
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
                <Collapse isOpen={this.state.collapse}
                    onEntering={keaton4President.onEntering}
                    onEntered={keaton4President.onEntered}
                    onExiting={keaton4President.onExiting}
                    onExited={keaton4President.onExited}>
                    <Form onSubmit={this.constructNewTask} className="taskForm">
                        <FormGroup className="taskFormGroup">
                            <Label htmlFor="task">Task</Label>
                            <Input
                                type="text"
                                required
                                className="taskFormInput"
                                onChange={this.handleFieldChange}
                                id="task"
                                placeholder="Task Name"></Input>
                        </FormGroup>
                        <FormGroup className="dateInput">
                            <Label htmlFor="completeDate">Date</Label>
                            <Input
                                type="date"
                                required
                                className="dateForm"
                                onChange={this.handleFieldChange}
                                id="completeDate"
                                value={this.state.completeDate}
                            />
                        </FormGroup>
                        <Button
                            type="submit"
                            className="btn btn-primary">
                            Submit
                </Button>
                    </Form>
                </Collapse>
            </>
        )
    }
}

export default TaskForm