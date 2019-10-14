import React, { Component } from 'react';
import EventCard from "./EventCard"
import API from  "../../modules/APIManager"
import {Button} from 'reactstrap';

//Test comments
class EventList extends Component {
  //This holds the state of the Events 
    state = {
      events: [],
    }

    deleteEvent = id => {
        API.delete("events", id)
        .then(() => {
          this.getData();
        })
      }

    getData = () => {
        //getAll from APIManager and hang on to that data; put it in state
        API.getAll("events")
            .then((events) => {
                this.setState({
                    events: events
                })
            })
    }

componentDidMount(){
    this.getData()
}

render() {
    //console.log("LOCATIONS LIST: Render");

    return (
      <>
        <div className="mainCard flex">
          <div className="buttonFlex">
        <Button color="danger" onClick={() => {this.props.history.push("/events/new")}}>New Post</Button>
        </div>
            {this.state.events.map(event => <EventCard key={event.id} event={event} deleteEvent={this.deleteEvent} {...this.props}/>)}
        </div>

      </>
    )
 }
}




export default EventList