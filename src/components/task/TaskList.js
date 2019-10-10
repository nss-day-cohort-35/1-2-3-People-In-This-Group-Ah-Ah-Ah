import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Collapse, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class TaskList extends Component {
    // create an object to show we've completed our task
    taskComplete(taskId) {
        const object = {
            id: taskId,
            complete: true,
            userId: parseInt(localStorage.getItem("userID"))
        }
        this.props.doneTask(object)
    }
    // create a new task, edit, or mark completed
    render() {
        return (
            <React.Fragment>
                <FormGroup className="newTask">
                    <Button type="button"
                        className="taskButton"
                        onClick={() => {
                            this.props.history.push("/tasks/new")
                        }}>Add Task</Button>
                </FormGroup>
                <FormGroup className="content">
                    {
                        this.props.tasks.map(task =>
                            <FormGroup key={task.id} className="card">
                                <Label>Edit <Link className="edit-link" to={`tasks/${task.id}/edit`}>{task.task}</Link> </Label>
                                <Label>Completed <Input type="checkbox"
                                    onClick={() => {
                                        this.taskComplete(task.id)
                                    }}
                                ></Input></Label>
                            </FormGroup>
                        )
                    }
                </FormGroup>
            </React.Fragment>

        )
    }
}

export default TaskList