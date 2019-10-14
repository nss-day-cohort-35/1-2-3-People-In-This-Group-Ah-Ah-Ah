import React, { Component } from "react"

=======
import { Button, Form, FormGroup, Label, Input} from "reactstrap";

import API from "../../modules/APIManager";

class TaskEditForm extends Component {
    //set the initial state
    state = {
        userId: parseInt(localStorage.getItem("userId")),
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
            id: this.props.match.params.taskId,
            title: this.state.title,
            date: this.state.date,
            complete: false,
            userId: this.state.userId
        };
        // push edited task
        API.update("tasks", editedTask)
            .then(() => this.props.history.push("/tasks"))
    }

    componentDidMount() {
        API.get("tasks", this.props.match.params.taskId)
            .then(task => {
                this.setState({
                    title: task.title,
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
                            id="title"
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