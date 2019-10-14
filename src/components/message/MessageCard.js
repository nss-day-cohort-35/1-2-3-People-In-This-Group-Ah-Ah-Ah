import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import API from '../../modules/APIManager'
import { Card, CardTitle, CardSubtitle, Button, Label } from "reactstrap";
import CardBody from 'reactstrap/lib/CardBody';
import Moment from "react-moment"
// import CardImg from 'reactstrap/lib/CardImg';





class MessageCard extends Component {


    handleDelete = (id) => {
        API.delete("messages", id)
            .then(() => this.props.getData());
    }

    render() {
        let dateToFormat = '1976-04-19T12:59-0500';
        return (
            <div><Card className="card">

                {/* <CardImg>
            <img src={} alt="" />
        </CardImg> */}
                <CardBody className="messageCard">
                    <CardTitle>:Message <span className="cardMessageName">{this.props.message.messageMain}</span></CardTitle>

                    <Moment date={dateToFormat} />
                    <Button type="button" onClick={() => { this.props.history.push(`/messages/${this.props.message.id}/edit`) }}>Edit</Button>
                    <Button type="button" onClick={() => this.handleDelete(this.props.message.id)}>Delete</Button>
                </CardBody>
            </Card>
            </div>







        )





    }




}

export default MessageCard