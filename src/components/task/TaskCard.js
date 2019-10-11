import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import API from '../../modules/APIManager'
import { Card, FormGroup, Label, CardTitle, CardSubtitle, Button, Input, } from "reactstrap";
import CardBody from 'reactstrap/lib/CardBody';
// import CardImg from 'reactstrap/lib/CardImg';

class TaskCard extends Component {

    handleDelete = (id) => {
        API.delete("tasks", id)
            .then(() => this.props.getData());
    }

    render() {

        return (
            <div><Card className="card">

                {/* <CardImg>
                        <img src={} alt="" />
                    </CardImg> */}
                <CardBody className="taskCard">
                    <CardTitle>Task: <span className="cardTaskName">{this.props.task.title}</span></CardTitle>
                    <CardSubtitle>Date: {this.props.task.date} </CardSubtitle >
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" />{' '}
                            Completed
                        </Label>
                    </FormGroup>
                    <Button type="button" onClick={() => { this.props.history.push(`/tasks/${this.props.task.id}/edit`) }}>Edit</Button>
                    <Button type="button" onClick={() => this.handleDelete(this.props.task.id)}>Delete</Button>
                </CardBody>
            </Card>
            </div>
        );
    }
}

export default TaskCard;