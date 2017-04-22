import React, { Component } from "react";
import Person from "../person";
import "./index.css";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      people: []
    };
  }

  componentWillMount() {
    this.getAstronauts();
    this.getBackground();
  }

  getAstronauts() {
    fetch("http://api.open-notify.org/astros.json")
      .then(res => res.json())
      .then(data =>
        this.setState({
          number: data.number,
          people: data.people
        })
      );
  }

  getBackground() {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=w2FcAdgkkXJIE3uvNjgPMUPxlgnuxdjzLvuxp8XD"
    )
      .then(res => res.json())
      .then(data =>
        this.setState({
          backgroundUrl: data.hdurl,
          backgroundTitle: data.title,
          backgroundExplanation: data.explanation
        })
      );
  }

  render() {
    const { number, people, backgroundUrl, backgroundTitle } = this.state;
    return (
      <div
        className="landing"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      >
        <h2>People in Space</h2>
        <h1>{number}</h1>
        <p id="background-title">{backgroundTitle}</p>

        {people.map(person => <Person key={person.name} {...person} />)}
      </div>
    );
  }
}

export default Landing;
