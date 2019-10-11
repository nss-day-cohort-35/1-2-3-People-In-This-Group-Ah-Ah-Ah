import React, { Component } from 'react';
import API from "./../../modules/APIManager"
import { Redirect } from "react-router-dom";
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row} from 'reactstrap';
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa"

class EventDetails extends Component {
  state = {
    title: "",
    date: "",
    location: "",
    img: "",
    loadingStatus: true,
    event: ""
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    API.delete("events", this.props.event.id)
    .then(() => this.props.history.push("/events"))
}

  componentDidMount(){

    API.get("events", this.props.eventId)
    .then((event) => {
      this.setState({
        title: event.title,
        date: event.date,
        location: event.location,
        img: event.img,
        loadingStatus: false,
        event: event
      });
    })
  }

  render () {
   //if (this.state.loadingStatus) return <p>Loading...</p>
  // if (!this.state.loadingStatus && this.state.event) {

    return (
        <div>
        <Card className="mainCard">
          <Row className="flex">
          </Row>
          <CardImg className="img" top width="100%" src="" alt="Card image cap"/>
          <CardBody>
            <CardTitle>{this.state.title}</CardTitle>
            <CardSubtitle>{this.state.date}</CardSubtitle>
            <CardText>{this.state.description}</CardText>
            <CardText>{this.state.img}</CardText>
          </CardBody>
          <Row>
            <Button type="button" onClick={() => { this.props.history.push(`/events/${this.props.eventId}/edit`) }}><FaRegEdit/></Button>
            <Button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}><FaRegTrashAlt/></Button>
          </Row>
        </Card>
     </div>
    );
  }
}

export default EventDetails