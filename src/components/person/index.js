import React, { Component } from "react";
import "./person.css";

class Person extends Component {
  render() {
    const { name, craft } = this.props;
    return (
      <div className="person">
        {name}
        <span>{craft}</span>
      </div>
    );
  }
}

export default Person;
