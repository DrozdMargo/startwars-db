import React, { Component } from 'react';

import './person-details.css';
import SwapiService from "../../services/swapi-service";
import { isJSXNamespacedName } from "@babel/types";

export default class PersonDetails extends Component {
  
  swapiService = new SwapiService();
  
  state = {
    person: null
  };
  
  componentDidMount() {
    this.updatePerson();
  }
  
  updatePerson() {
    if (this.props.personId) {
      this.swapiService.getPerson(this.props.personId).then((person) => {
        this.setState({person});
      })
    }
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevProps, prevState, snapshot);
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }
  
  render() {
    if(!this.state.person) {
      return (<span>couldn't find anyone</span>);
    }
  
    const {id, name, gender, eye_color} = this.state.person;
    
    return (
      <div className="person-details card">
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>43</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eye_color}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
