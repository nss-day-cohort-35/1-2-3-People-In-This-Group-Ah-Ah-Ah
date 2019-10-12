import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import API from '../../modules/APIManager'
import { Card,CardTitle, CardSubtitle, Button,} from "reactstrap";
import CardBody from 'reactstrap/lib/CardBody';
// import CardImg from 'reactstrap/lib/CardImg';





class MessageCard extends Component {


    handleDelete = (id) => {
        API.delete("messages", id)
            .then(() => this.props.getData());
    }

    render() {
  return(
    <div><Card className="card">

    {/* <CardImg>
            <img src={} alt="" />
        </CardImg> */}
    <CardBody className="messageCard">
        <CardTitle>: <span className="cardMessageName">{this.props.message.title}</span></CardTitle>
        <CardSubtitle>Date: {this.props.message.date} </CardSubtitle >
        <Button type="button" onClick={() => { this.props.history.push(`/messages/${this.props.message.id}/edit`) }}>Edit</Button>
        <Button type="button" onClick={() => this.handleDelete(this.props.message.id)}>Delete</Button>
    </CardBody>
</Card>
</div>
    






  )





    }




}

export default MessageCard