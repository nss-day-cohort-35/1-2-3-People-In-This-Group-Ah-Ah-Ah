import React, { Component } from 'react'
import {Button } from "reactstrap";
import TaskCard from './TaskCard'
import API from '../../modules/APIManager';

class TaskList extends Component {
    //define what this component needs to render
    state = {
        tasks: [],
    }

    deleteTask = id => {
        API.delete("tasks", id)
            .then(() => {
                API.getAll("tasks")
                    .then((newTasks) => {
                        this.setState({
                            tasks: newTasks
                        })
                    })
            })
    }

    getData = () => {
        console.log("trying to get tasks")
        //getAll from APIManager and hang on to that data; put it in state
        API.getAll("tasks")
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
            <div>
                <Button onClick={() => { this.props.history.push("/tasks/new") }}>Create Task</Button>
                {this.state.tasks.map(task =>
                    <TaskCard key={task.id}
                        getData={this.getData}
                        task={task}
                        deleteTask={this.deleteTask}
                        {...this.props}
                        className="card" />

                )}

            </div>

        )
    }
}
export default TaskList