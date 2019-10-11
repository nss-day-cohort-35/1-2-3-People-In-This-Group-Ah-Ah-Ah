import React, { Component } from 'react';
import EventCard from "./EventCard"
import API from  "../../modules/APIManager"
import { Button } from 'reactstrap';

class EventList extends Component {
  //This holds the state of the Events
    state = {
      events: [],
    }

    deleteEvent = id => {
        API.delete("events", id)
        .then(() => {
          API.getAll("events")
          .then((events) => {
            this.setState({
                events: events
            })
          })
        })
      }

componentDidMount(){
    console.log('Component did mount!')

    API.getAll("events")
    .then((events) => {
        this.setState({
            events: events
        })
    })
}

render() {
    console.log("LOCATIONS LIST: Render");

    return(
      <>
        <div>
        <Button onClick={() => {this.props.history.push("/events/new")}}>New Event</Button>
            {this.state.events.map(event => <EventCard key={event.id} event={event} deleteEvent={this.deleteEvent} {...this.props}/>)}
        </div>
      </>
    )
 }
}




export default EventList