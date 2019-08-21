import React from 'react';
import { StarshipList } from '../sw-components';
import { withRouter } from 'react-router-dom';

const StarShipsPage = ({history}) => {
  
    return (
      <StarshipList onItemSelected={(itemId) => {
        return history.push(`/starships/${itemId}`);
      }} />
    );
};

export default withRouter(StarShipsPage);
