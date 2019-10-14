import React, { Component } from 'react';
import API from '../../modules/APIManager';
import {Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class EventForm extends Component {
    //set the initial state
    constructor(props) {
      super(props);
      this.state = {
        title: "",
        date: "",
        location: "",
        img: "",
        description: "",
        loadingStatus: false,
        modal: true
    }
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

    constructNewEvent = evt => {
        evt.preventDefault();
            this.setState({ loadingStatus: true });
            const event = {
                title: this.state.title,
                date: this.state.date,
                location: this.state.location,
                description: this.state.description,
                img: this.state.img,
            };

        API.post("events", event)
          .then(() => this.props.history.push("/events"))
    }

    render() {
      if (this.state.loadingStatus) return <p>Loading...</p>

      return (
        <>
        <div className="center">
        {/*<Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>*/}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody>
           <Form>
            <ModalHeader toggle={this.toggle}>New Event</ModalHeader>
            <FormGroup>
              <Input type="text" name="title" id="title" onChange={this.handleFieldChange} placeholder="place title"/>
            </FormGroup>
            <FormGroup>
               <Label for="date">Date</Label>
               <Input type="date" name="date" id="date" onChange={this.handleFieldChange} placeholder="place date"/>
            </FormGroup>
            <FormGroup>
                <Label for="location">Location</Label>
                <Input type="text" name="location" id="location" onChange={this.handleFieldChange} placeholder="place location"/>
            </FormGroup>
            <FormGroup>
                <Label for="img">Image</Label>
                <Input type="text" name="img" id="img" onChange={this.handleFieldChange} placeholder="place image"/>
            </FormGroup>
            <FormGroup>
                <Label for="description">Description</Label>
                <Input type="text" name="description" id="description" onChange={this.handleFieldChange} placeholder="place url"/>
            </FormGroup>
           </Form>
          </ModalBody>
          <ModalFooter>
            <Button type="button" disabled={this.state.loadingStatus} onClick={this.constructNewEvent}>Submit</Button>
          </ModalFooter>
      </Modal>
    </div>
        </>
      );
    }
}

export default EventForm