import React, { Component } from 'react'
//import the components we will need
import ArticleCard from './ArticleCard'
import API from "./../../modules/APIManager"


class ArticleList extends Component {
    //define what this component needs to render
    state = {
        articles: [],
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
            {this.state.articles.map(article => <ArticleCard key={article.id} article={article} {...this.props}/>)}
        </div>
    )
}
}

export default ArticleList