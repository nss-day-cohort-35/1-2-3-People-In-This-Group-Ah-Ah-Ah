import React, { Component } from "react"
import taskManager from "./TaskManager"

class TaskEditForm extends Component {
    //set the initial state
    state = {
        userId: "",
        title: "",
        date: "",
        complete: ""
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
        taskManager.update(editedTask)
            .then(() => this.props.history.push("/tasks"))
    }

    componentDidMount() {
        taskManager.get(this.props.match.params.taskId)
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
                <form onSubmit={this.updateExistingTask} className="taskForm">
                    <div className="taskDiv">
                        <label htmlFor="task">Task</label>
                        <input
                            type="text"
                            required
                            className="taskFormInput"
                            onChange={this.handleFieldChange}
                            id="task"
                            placeholder="Task Name"></input>
                    </div>
                    <div className="dateInput">
                        <label htmlFor="completeDate">Date</label>
                        <input
                            type="date"
                            required
                            className="dateForm"
                            onChange={this.handleFieldChange}
                            id="completeDate"
                            value={this.state.completeDate}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary">
                        Submit
                </button>
                </form>
            </>
        );
    }
}
export default TaskEditForm