import React, { Component } from 'react';
import { Link } from "react-router-dom";
import API from '../../modules/APIManager'
import { Collapse, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class TaskCard extends Component {

    handleDelete = (id) => {
        API.delete("tasks", id)
            .then(() => this.props.getData());
    }

    render() {
        return (
            <Form className="card">
                <FormGroup className="taskCard">
                    {/* <Picture>
                        <img src={} alt="" />
                    </Picture> */}
                    <Label>Task: <span className="cardTaskName">{this.props.task.title}</span></Label>
                    <Label>Date: {this.props.task.date} </Label>
                    <Link to={`/tasks/${this.props.task.id}`}><Button>All Tasks</Button></Link>
                    <Button type="button" onClick={() => { this.props.history.push(`/tasks/${this.props.task.id}/edit`) }}>Edit</Button>
                    <Button type="button" onClick={() => this.props.handleDelete(this.props.task.id)}>Delete</Button>
                </FormGroup>
            </Form>
        );
    }
}

export default TaskCard;