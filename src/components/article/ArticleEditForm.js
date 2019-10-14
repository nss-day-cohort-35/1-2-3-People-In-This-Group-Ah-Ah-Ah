import React, { Component } from "react"
import API from "../../modules/APIManager"
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

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
        headline: this.state.headline,
        date: this.state.date,
        description: this.state.description,
        image: this.state.image,
        url: this.state.url,
        loadingStatus: false
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
       <Form onSubmit={this.updateExistingArticle} className="articleForm">
                    <FormGroup className="articleFormGroup">
                        <Label htmlFor="article">Headline</Label>
                        <Input
                            type="text"
                            required
                            className="ArticleFormInput"
                            onChange={this.handleFieldChange}
                            id="headline"
                            value={this.state.headline}
                            placeholder="Headline Name"></Input>
                    </FormGroup>

                    <FormGroup className="dateInput">
                        <Label htmlFor="completeDate">Date</Label>
                        <Input
                            type="date"
                            required
                            className="dateForm"
                            onChange={this.handleFieldChange}
                            id="date"
                            value={this.state.date}
                        />
                    </FormGroup>
                    <FormGroup className="dateInput">
                        <Label htmlFor="completeDate">Description</Label>
                        <Input
                            type="text"
                            required
                            className="dateForm"
                            onChange={this.handleFieldChange}
                            id="description"
                            value={this.state.description}
                        />
                    </FormGroup>
                    <FormGroup className="dateInput">
                        <Label htmlFor="completeDate">Image</Label>
                        <Input
                            type="text"
                            required
                            className="dateForm"
                            onChange={this.handleFieldChange}
                            id="image"
                            value={this.state.image}
                        />
                    </FormGroup>
                    <FormGroup className="dateInput">
                        <Label htmlFor="completeDate">Url</Label>
                        <Input
                            type="text"
                            required
                            className="dateForm"
                            onChange={this.handleFieldChange}
                            id="url"
                            value={this.state.url}
                        />
                    </FormGroup>
                    <Button
                        type="submit"
                        className="btn btn-primary">
                        Submit
                </Button>
                </Form>
        </>
      );
    }
}

export default ArticleEditForm