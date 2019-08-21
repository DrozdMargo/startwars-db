import React from 'react';
import { PlanetList } from '../sw-components';
import { withRouter } from 'react-router-dom';

const PlanetsPage = ({history}) => {
 
    return (
      <PlanetList onItemSelected={(itemId) => {
        return history.push(`/planets/${itemId}`);
      }} />
    );
};

export default withRouter(PlanetsPage);
