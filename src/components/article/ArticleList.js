import React, { Component } from 'react'
//import the components we will need
import ArticleCard from './ArticleCard'
import API from "./../../modules/APIManager"
import {Button} from 'reactstrap';
import "./Article.css"


class ArticleList extends Component {
    //define what this component needs to render
    state = {
        articles: [],
    }

    handleDelete = () => {
        console.log("handle delete :", this.props.article.id)
        API.delete("articles", this.props.article.id)
          .then(() => this.props.history.push("/articles"))
    }

componentDidMount(){
    console.log("Article LIST: ComponentDidMount");

    API.getAll("articles")
    .then((articles) => {
        this.setState({
            articles: articles
        })
    })
}

render(){
    console.log("Article LIST: Render");

    return(
        <div>
          <div className="flex">
           <Button onClick={() => {this.props.history.push("/articles/new")}}>New Post</Button>
          </div>
            {this.state.articles.map(article => <ArticleCard key={article.id} article={article} {...this.props}/>)}
        </div>
    )
}
}

export default ArticleList