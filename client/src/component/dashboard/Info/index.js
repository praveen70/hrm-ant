import React, { Component } from 'react'
import { 
    Button
  } from "antd";

 class Info extends Component {


    signout = event => {
        event.preventDefault();
        localStorage.clear();
        this.props.history.push("/");
      };

  render() {
    return (
      <div>
        <p>Currently Working For User</p>
        <Button onClick={this.signout}>Signout</Button>
      </div>
    )
  }
}

export default Info; 
