import React, { Component } from 'react';
import API from '../../modules/APIManager'
import { Card, Row, FormGroup, Label, CardTitle, CardSubtitle, Button, Input, } from "reactstrap";
import CardBody from 'reactstrap/lib/CardBody';
import { FaRegTrashAlt, FaRegEdit} from "react-icons/fa";


class TaskCard extends Component {

    handleDelete = (id) => {
        API.delete("tasks", id)
            .then(() => this.props.getData());
    }

    render() {

        return (
            <div>
              <Card className="mainCard">
                <CardBody>
                    <CardTitle>Task: <span className="cardTaskName">{this.props.task.title}</span></CardTitle>
                    <CardSubtitle>Date: {this.props.task.date} </CardSubtitle >
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" />{' '}
                            Completed
                        </Label>
                    </FormGroup>
                    <Row className="buttonFlex">
                      <Button className="button" type="button" onClick={() => { this.props.history.push(`/tasks/${this.props.task.id}/edit`) }}><FaRegEdit/></Button>
                      <Button className="button" type="button" onClick={() => this.handleDelete(this.props.task.id)}><FaRegTrashAlt/></Button>
                    </Row>
                </CardBody>
            </Card>
            </div>
        );
    }
}

export default TaskCard;