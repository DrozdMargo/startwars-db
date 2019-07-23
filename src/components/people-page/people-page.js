import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import PersonDetails from '../item-details/item-details';
import ErrorIndicator from '../error-indicator/error-indicator';
import SwapiService from "../../services/swapi-service";
import './people-page.css';

class ErrorBoundary extends Component {
  
  state = {
    hasError: false
  };
  
  
  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });
  }
  
  
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator/>;
    }
    return this.props.children;
  }
}

const Row = ({left, right}) => {
  return (
    <div className="row mb2">
      <div className="col-md-6">
        {left}
      </div>
      <div className="col-md-6">
        {right}
      </div>
    </div>
  )
};

export default class PeoplePage extends Component {
  
  swapiService = new SwapiService();
  
  state = {
    selectedPerson: 3
  };
  
  onPersonSelected = (selectedPerson) => {
    this.setState({selectedPerson});
  };
  
  render() {
    
    if (this.state.hasError) {
      return <ErrorIndicator/>;
    }
    
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}>
        
        {(i) => (
          `${i.name} (${i.birthYear})`)
        }
      
      </ItemList>
    );
    
    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson}/>
    );
    
    return (
      <ErrorBoundary>
        <Row left={itemList} right={personDetails}/>
      </ErrorBoundary>
    );
  }
}
