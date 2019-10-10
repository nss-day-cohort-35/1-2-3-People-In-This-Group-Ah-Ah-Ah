import React, { Component } from 'react';
//import { Link } from "react-router-dom";
import API from "./../../modules/APIManager"
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row} from 'reactstrap';
import { FaRegTrashAlt, FaRegEdit} from "react-icons/fa";
import "./Article.css"

class ArticleCard extends Component {

    handleDelete = () => {
        console.log("handle delete :", this.props.article.id)
        API.delete("articles", this.props.article.id)
          .then(() => this.props.history.push("/articles"))
    }

    render() {
        return (
          <div>
            <Card className="mainCard">
              <Row className="flex">
                <Button type="button"><FaRegEdit/></Button>
                <Button type="button" onClick={this.handleDelete}><FaRegTrashAlt/></Button>
              </Row>
              <CardImg className="img" top width="100%" src={require("./../../img/vampire.jpg")} alt="Card image cap"/>
              <CardBody>
                <CardTitle>{this.props.article.headline}</CardTitle>
                <CardSubtitle>{this.props.article.date}</CardSubtitle>
                <CardText>{this.props.article.description}</CardText>
                <CardText>{this.props.article.url}</CardText>
              </CardBody>
            </Card>
         </div>
    );
        }
  }

export default ArticleCard
