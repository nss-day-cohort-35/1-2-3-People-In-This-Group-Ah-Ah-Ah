import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class TaskList extends Component {
    // create an object to show we've completed our task
    taskComplete(taskId) {
        const object = {
            id: taskId,
            complete: true,
            userId: parseInt(sessionStorage.getItem("userID"))
        }
        this.props.doneTask(object)
    }
    // create a new task, edit, or mark completed
    render() {
        return (
            <React.Fragment>
                <div className="newTask">
                    <button type="button"
                        className="taskButton"
                        onClick={() => {
                            this.props.history.push("/tasks/new")
                        }}>Add Task</button>
                </div>
                <section className="content">
                    {
                        this.props.tasks.map(task =>
                            <div key={task.id} className="card">
                                <label>Edit <Link className="edit-link" to={`tasks/${task.id}/edit`}>{task.task}</Link> </label>
                                <label>Completed <input type="checkbox"
                                    onClick={() => {
                                        this.taskComplete(task.id)
                                    }}
                                ></input></label>
                            </div>
                        )
                    }
                </section>
            </React.Fragment>

        )
    }
}

export default TaskList