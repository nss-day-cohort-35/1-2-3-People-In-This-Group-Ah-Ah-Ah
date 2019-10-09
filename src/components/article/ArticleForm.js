class ArticleForm extends Component {
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

    constructNewArticle = evt => {
        evt.preventDefault();
            this.setState({ loadingStatus: true });
            const article = {
                headline: article.state.headline,
                date: article.state.date,
                description: article.state.description,
                image: article.state.image,
                url: article.state.url,
            };

        API.post( "articles", editedArticle)
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
          <Form>
            <FormGroup>
                <Label for="headline">Headline</Label>
                <Input type="text" name="headline" id="headline" onChange={this.handleFieldChange} placeholder="place headline"/>
            </FormGroup>
            <FormGroup>
                <Label for="date">Date</Label>
                <Input type="text" name="date" id="date" onChange={this.handleFieldChange} placeholder="place date"/>
            </FormGroup>
            <FormGroup>
                <Label for="date">Description</Label>
                <Input type="date" name="description" id="description" onChange={this.handleFieldChange} placeholder="place description"/>
            </FormGroup>
            <FormGroup>
                <Label for="date">Image</Label>
                <Input type="text" name="image" id="image" onChange={this.handleFieldChange} placeholder="place image"/>
            </FormGroup>
            <FormGroup>
                <Label for="date">URL</Label>
                <Input type="text" name="url" id="image" onChange={this.handleFieldChange} placeholder="place image"/>
            </FormGroup>
            <Button type="button" disabled={this.state.loadingStatus} onClick={this.constructNewArticle}>Submit</Button>
          </Form>
        </>
      );
    }
}

export default ArticleForm