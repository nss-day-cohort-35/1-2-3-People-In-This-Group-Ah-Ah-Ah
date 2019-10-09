import React, { Component } from "react"
import API from "../../modules/APIManager"

class ArticleEditForm extends Component {
    //set the initial state
    state = {
        headline: "",
        date: "",
        description: "",
        image: "",
        url: "",
        loadingStatus: true
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingArticle = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });

      const editedArticle = {
        id: this.props.match.params.articleId,
        headline: this.props.state.article.headline,
        date: this.props.state.article.date,
        description: this.props.state.description,
        image: this.props.state.image,
        url: this.props.state.url,
      };

      API.update( "articles", editedArticle)
      .then(() => this.props.history.push("/articles"))
    }

    componentDidMount() {
      API.get("articles", this.props.match.params.articleId)
      .then(article => {
          this.setState({
            headline: article.headline,
            date: article.date,
            description: article.description,
            image: article.image,
            url: article.url,
            loadingStatus: false
          });
      });
    }

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="name"
                value={this.state.name}
              />
              <label htmlFor="employeeName">Name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="position"
                value={this.state.position}
              />
              <label htmlFor="position">Position</label>

            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingEmployee}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default ArticleEditForm