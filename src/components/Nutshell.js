import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
<<<<<<< HEAD
import "./NutShell.css";


=======
//import "./Nutshell.css";
>>>>>>> master
class Nutshell extends Component {

  state = {
    user: false
  }

  // Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  setUser = (authObj) => {
    /*
      For now, just store the email and password that
      the customer enters into local storage.
    */
    sessionStorage.setItem(
      "credentials",
      JSON.stringify(authObj)
    )
    this.setState({
      user: this.isAuthenticated()
    });
  }

  clearUser = () => {
    sessionStorage.clear()

    this.setState({
      user: this.isAuthenticated()
    });

  }
  componentDidMount() {
    this.setState({
      user: this.isAuthenticated()
    })
  }

  render() {
    console.log("guess what", this.props.user)
    return (
      <>
      {(this.props.user)} 
        <NavBar
        user={this.state.user} clearUser={this.clearUser}
        />

        <ApplicationViews user={this.state.user}
          setUser={this.setUser}
           />

      </>
    )
  }
}


export default Nutshell;
