import React, { Component } from 'react';
import Restaurant from './Restaurant';
import { Row } from 'react-materialize';
import restaurants from '../storage/restaurants';

class RestaurantsList extends Component {
  returnRestaurants = () => {
    return restaurants.map((r) => {
      return <Restaurant restaurant={r} />
    })
  }
  
  render() {
    return (
      <div>
          <Row>
            {
              this.returnRestaurants()
            }
          </Row>
      </div>
    );
  }
}

export default RestaurantsList;
