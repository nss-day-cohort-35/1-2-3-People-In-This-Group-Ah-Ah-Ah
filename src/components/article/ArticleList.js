import React, { Component } from 'react'
//import the components we will need
import ArticleCard from './ArticleCard'
import API from "./../../modules/APIManager"
import {Button} from 'reactstrap';
import "../../main.css"


class ArticleList extends Component {
    //define what this component needs to render
    state = {
        articles: [],
    }

    deleteArticle = id => {
        API.delete("articles", id)
            .then(() => {
                API.getAll("articles")
                    .then((newArticles) => {
                        this.setState({
                            articles: newArticles
                        })
                    })
            })
    }

    getData = () => {
        console.log("trying to get tasks")
        //getAll from APIManager and hang on to that data; put it in state
        API.getAll("articles")
            .then((articles) => {
                this.setState({
                    articles: articles
                })
            })
    }

    componentDidMount() {
        this.getData()
    }

render(){
    console.log("Article LIST: Render");

    return(
        <div className="mainMainCard flex">
          <div className="buttonFlex">
           <Button color="danger" onClick={() => {this.props.history.push("/articles/new")}}>New Post</Button>
          </div>
            {this.state.articles.map(article => <ArticleCard key={article.id} getData={this.getData} article={article} deleteArticle={this.deleteArticle} {...this.props}/>)}

        </div>
    )
}
}

export default ArticleList