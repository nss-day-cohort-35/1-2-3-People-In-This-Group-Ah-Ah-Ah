import React, { Component } from 'react';
//import { Link } from "react-router-dom";
import API from "./../../modules/APIManager"
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row} from 'reactstrap';
import { FaRegTrashAlt, FaRegEdit} from "react-icons/fa";
import "./Article.css"

class ArticleCard extends Component {

  handleDelete = (id) => {
    API.delete("articles", id)
        .then(() => this.props.getData());
}

    render() {
        return (
          <div>
            <Card className="mainCard">
              <Row className="flex">
              </Row>
              <CardImg className="img" top width="100%" src={require("./../../img/vampire.jpg")} alt="Card image cap"/>
              <CardBody>
                <CardTitle>{this.props.article.headline}</CardTitle>
                <CardSubtitle>{this.props.article.date}</CardSubtitle>
                <CardText>{this.props.article.description}</CardText>
                <CardText>{this.props.article.url}</CardText>
                <Button type="button" onClick={() => { this.props.history.push(`/articles/${this.props.article.id}/edit`) }}><FaRegEdit/></Button>
                <Button type="button" onClick={() => this.handleDelete(this.props.article.id)}><FaRegTrashAlt/></Button>
              </CardBody>
            </Card>
         </div>
    );
        }
  }

export default ArticleCard
