import React, { Component } from 'react';
import { Link } from "react-router-dom";
import API from "./../../modules/APIManager"
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Row} from 'reactstrap';
import {FaRegTrashAlt } from "react-icons/fa"

class EventCard extends Component {
  handleDelete = (id) => {
    API.delete("events", id)
        .then(() => this.props.getData());
}

render() {
    return (
      <div>
        <Card className="mainCard">
          <Row className="flex">
          </Row>
          <CardImg className="img" top width="100%" src="" alt="Card image cap"/>
          <CardBody>
            <CardTitle>{this.props.event.title}</CardTitle>
            <CardSubtitle>{this.props.event.date}</CardSubtitle>
          </CardBody>
          <Link to={`/events/${this.props.event.id}`} type="button"><Button>Details</Button></Link>
          <Button type="button" onClick={()=> this.props.deleteEvent(this.props.event.id)}><FaRegTrashAlt/></Button>
        </Card>
     </div>
);
    }
}



export default EventCard