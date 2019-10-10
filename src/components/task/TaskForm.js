import React, { Component } from 'react';
import taskManager from "./TaskManager"


class TaskForm extends Component {
    state = {
        userId: "",
        title: "",
        date: "",
        complete: ""
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
        taskManager.post(newTask)
            .then(() => this.props.history.push("/tasks"));
    }

    // build JSX that will display on DOM
    render() {
        return (
            <>
                <form onSubmit={this.constructNewTask} className="taskForm">
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
        )
    }
}

export default TaskForm