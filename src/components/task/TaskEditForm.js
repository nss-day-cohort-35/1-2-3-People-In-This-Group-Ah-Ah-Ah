import React, { Component } from "react"
import { Collapse, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import APIManager from "../../modules/APIManager"

class TaskEditForm extends Component {
    //set the initial state
    state = {
        userId: "",
        title: "",
        date: "",
        complete: "",
        collapse: false,
        status: ""
    };
    // set state to value of input
    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }
    // update edited task object
    updateExistingTask = event => {
        event.preventDefault()
        this.setState({ loadingStatus: true });
        const editedTask = {
            title: this.props.match.params.taskId,
            date: this.state.date,
            complete: false,
            userId: parseInt(localStorage.getItem("userId"))
        };
        // push edited task
        APIManager.update("tasks", editedTask)
            .then(() => this.props.history.push("/tasks"))
    }

    componentDidMount() {
        APIManager.get(this.props.match.params.taskId)
            .then(task => {
                this.setState({
                    title: task.name,
                    date: task.date,
                    complete: false,
                    userId: task.userId
                });
            });
    }



    // render JSX to be displayed on the DOM
    render() {
        return (
            <>
                <Form onSubmit={this.updateExistingTask} className="taskForm">
                    <FormGroup className="taskFormGroup">
                        <Label htmlFor="task">Task</Label>
                        <Input
                            type="text"
                            required
                            className="taskFormInput"
                            onChange={this.handleFieldChange}
                            id="taskEdit"
                            placeholder="Task Name"></Input>
                    </FormGroup>
                    <FormGroup className="dateInput">
                        <Label htmlFor="completeDate">Date</Label>
                        <Input
                            type="date"
                            required
                            className="dateForm"
                            onChange={this.handleFieldChange}
                            id="taskEditCompleteDate"
                            value={this.state.completeDate}
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
export default TaskEditForm