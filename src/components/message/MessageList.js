import React, { Component } from 'react'
import MessageCard from './MessageCard'
import API from '../../modules/APIManager';
import { Button } from "reactstrap";
class MessageList extends Component {
    //define what this component needs to render
    state = {
        messages: [],
    }

    deleteTask = id => {
        API.delete("messages", id)
            .then(() => {
                API.getAll("messages")
                    .then((newMessages) => {
                        this.setState({
                            messages: newMessages
                        })
                    })
            })
    }

    getData = () => {
        console.log("trying to get messages")
        //getAll from APIManager and hang on to that data; put it in state
        API.getAll("messages")
            .then((messages) => {
                this.setState({
                    messages: messages
                })
            })
    }

    componentDidMount() {
        this.getData()
    }
    // create a new task, edit, or mark completed
    render() {
        return (
            <div>
                <Button onClick={() => { this.props.history.push("/messages/new") }}>New Message</Button>
                {this.state.messages.map(message =>
                    <MessageCard key={message.id}
                        getData={this.getData}
                        message={message}
                        deleteMessage={this.deleteMessage}
                        {...this.props}
                        className="card" />

                )}

            </div>

        )
    }
}
export default MessageList