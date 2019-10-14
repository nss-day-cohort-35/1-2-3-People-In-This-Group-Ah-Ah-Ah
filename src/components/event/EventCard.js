import React, { Component } from 'react';
import { Link } from "react-router-dom";
import API from "./../../modules/APIManager"
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Row} from 'reactstrap';
import {FaRegTrashAlt } from "react-icons/fa"
import "../../main.css"

class EventCard extends Component {
  handleDelete = (id) => {
    API.delete("events", id)
        .then(() => this.props.getData());
}

render() {
    return (
      <div>
        <Card className="mainCard">
          <CardImg className="img" top width="100%" src={require("./../../img/vampire.jpg")} alt="Card image cap"/>
          <CardBody>
            <CardTitle>{this.props.event.title}</CardTitle>
            <CardSubtitle>{this.props.event.date}</CardSubtitle>
          </CardBody>
          <Link className="navLink"to={`/events/${this.props.event.id}`} type="button"><Button>Details</Button></Link>
          <Row className="buttonFlex">
            <Button className="button" type="button" onClick={()=> this.props.deleteEvent(this.props.event.id)}><FaRegTrashAlt/></Button>
          </Row>
        </Card>
     </div>
);
    }
}



export default EventCard