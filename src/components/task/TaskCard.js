import React, { Component } from 'react';
import { Link } from "react-router-dom";
import APIManager from '../../modules/APIManager'
import { Collapse, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class TaskCard extends Component {

    handleDelete = (id) => {
        APIManager.delete(id)
            .then(() => this.props.getData());
    }

    render() {
        return (
            <Form className="card">
                <FormGroup className="taskCard">
                    <Picture>
                        <img src={} alt="" />
                    </Picture>
                    <Label>Task: <span className="cardTaskName">{firstLetterCase(this.props.tasks.title)}</span></Label>
                    <Label>Date: {this.props.tasks.date} </Label>
                    <Link to={`/tasks/${this.props.tasks.id}`}><Button>All Tasks</Button></Link>
                    <Button type="button" onClick={() => { this.props.history.push(`/tasks/${this.props.tasks.id}/edit`) }}>Edit</Button>
                    <Button type="button" onClick={() => this.props.handleDelete(this.props.tasks.id)}>Delete</Button>
                </FormGroup>
            </Form>
        );
    }
}

export default TaskCard;