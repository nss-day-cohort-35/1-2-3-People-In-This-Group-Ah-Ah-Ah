import React, { Component } from 'react';
import API from '../../modules/APIManager';
import {Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import "./Article.css"

class ArticleForm extends Component {
    //set the initial state
    constructor(props) {
      super(props);
      this.state = {
        headline: "",
        date: "",
        description: "",
        image: "",
        url: "",
        loadingStatus: false,
        modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    constructNewArticle = evt => {
        evt.preventDefault();
            this.setState({ loadingStatus: true });
            const article = {
                headline: this.state.headline,
                date: this.state.date,
                description: this.state.description,
                image: this.state.image,
                url: this.state.url,
            };
        API.post("articles", article)
          .then(() => this.props.history.push("/articles"))
    }

    render() {
      if (this.state.loadingStatus) return <p>Loading...</p>

      return (
        <>
        <div className="center">
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody>
           <Form>
            <ModalHeader toggle={this.toggle}>New Post</ModalHeader>
            <FormGroup>
              <Input type="text" name="headline" id="headline" onChange={this.handleFieldChange} placeholder="place headline"/>
            </FormGroup>
            <FormGroup>
               <Label for="date">Date</Label>
               <Input type="date" name="date" id="date" onChange={this.handleFieldChange} placeholder="place date"/>
            </FormGroup>
            <FormGroup>
                <Label for="date">Description</Label>
                <Input type="text" name="description" id="description" onChange={this.handleFieldChange} placeholder="place description"/>
            </FormGroup>
            <FormGroup>
                <Label for="date">Image</Label>
                <Input type="text" name="image" id="image" onChange={this.handleFieldChange} placeholder="place image"/>
            </FormGroup>
            <FormGroup>
                <Label for="date">URL</Label>
                <Input type="text" name="url" id="image" onChange={this.handleFieldChange} placeholder="place image"/>
            </FormGroup>
           </Form>
          </ModalBody>
          <ModalFooter>
            <Button type="button" disabled={this.state.loadingStatus} onClick={this.constructNewArticle}>Submit</Button>
          </ModalFooter>
      </Modal>
    </div>  
        </>
      );
    }
}

export default ArticleForm