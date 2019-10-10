import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Collapse, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import TaskCard from './TaskCard'

class TaskList extends Component {
    //define what this component needs to render
    state = {
        tasks: [],
    }

    deleteTask = id => {
        APIManager.delete(id)
            .then(() => {
                APIManager.getAll()
                    .then((newTasks) => {
                        this.setState({
                            tasks: newTasks
                        })
                    })
            })
    }

    getData = () => {
        //getAll from AnimalManager and hang on to that data; put it in state
        APIManager.getAll()
            .then((tasks) => {
                this.setState({
                    tasks: tasks
                })
            })
    }

    componentDidMount() {
        this.getData()
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
                            <FormGroup>
                                <TaskCard key={task.id} className="card">
                                    <Label>Edit <Link className="edit-link" to={`tasks/${task.id}/edit`}>{task.task}</Link> </Label>
                                    <Label>Completed <Input type="checkbox"
                                        onClick={() => {
                                            this.taskComplete(task.id)
                                        }}
                                    ></Input></Label>
                                </TaskCard>
                            </FormGroup>
                        )
                    }
                </FormGroup>
            </React.Fragment>

        )
    }
}

export default TaskList