import React, { Component } from 'react';
//import { Link } from "react-router-dom";
import API from "./../../modules/APIManager"
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

class ArticleCard extends Component {
    handleDelete = () => {
        this.setState({loadingStatus: true})
        API.delete("articles", this.props.articleId)
        .then(() => this.props.history.push("/articles"))
    }

    render() {
        return (
          <div>
            <Card>
             <Button type="button">logo</Button>
             <Button type="button">x</Button>
              <CardImg top width="100%" src={require("./../../img/vampire.jpg")} alt="Card image cap"/>
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
