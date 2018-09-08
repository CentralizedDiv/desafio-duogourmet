import React, { Component } from 'react';
import Restaurant from './Restaurant';
import { Row } from 'react-materialize';

class RestaurantsList extends Component {
  returnRestaurants = (restaurants) => {
    return restaurants.map((r, index) => {
      return <Restaurant key={index} restaurant={r} />
    }).filter((r) => {
      r = r.props.restaurant;
      return r.name.toLowerCase().indexOf(this.props.filters.name.toLowerCase()) !== -1;
    }).filter((r) => {
      r = r.props.restaurant;
      return r.culinary.toLowerCase().indexOf(this.props.filters.culinary.toLowerCase()) !== -1;
    });
  }
  
  render() {
    return (
      <div>
          <Row>
            {
              this.returnRestaurants(this.props.restaurants)
            }
          </Row>
      </div>
    );
  }
}

export default RestaurantsList;
