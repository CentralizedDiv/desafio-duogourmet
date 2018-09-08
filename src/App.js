import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'; 
import RestaurantsList from './components/RestaurantsList';
import Filter from './components/Filter';
import style from './style/style';
import restaurants from './storage/restaurants';
import {generateRandomPoints, distance} from './utilities/geo';

const LOGO_DUO = "https://www.duogourmet.com.br/img/logo-white.png";

class App extends Component {
  state = {
    restaurants: [],
    filters: {
      name: '',
      culinary: ''
    }
  }
  //Use utility function to generate random location for the restaurants
  getRandomLocations = () => {
    return new Promise((resolve, reject) => {
      let latitude = 0;
      let longitude = 0;
      navigator.geolocation.getCurrentPosition((position) => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        let randomLocations = generateRandomPoints({'lat':latitude, 'lon':longitude}, 1000, restaurants.length);
        resolve({randomLocations, currentLocation: {lat: latitude, lon: longitude}});
      }, () => {
        resolve({randomLocations:[]});
      });    
    });
  }

  sortByDistance = (a, b) => {
    if (a.distanceInKm < b.distanceInKm)
      return -1;
    if (a.distanceInKm > b.distanceInKm)
      return 1;
    return 0;  
  }

  //Set restaurants in state
  componentDidMount() {
    this.getRandomLocations().then((geolocation) => {
      let restaurantsWithLocation = restaurants.map((r, index) => {
        //if user accept get location
        if(geolocation.randomLocations.length > 0){
          //calculate distance between user and random location 
          let distanceInM = parseFloat(distance(geolocation.randomLocations[index], geolocation.currentLocation).toFixed(2));
          //save it for ordering
          r.distanceInKm = distanceInM;

          //meters or kilometers
          if(distanceInM < 1)
            distanceInM = (distanceInM * 1000) + ' m';
          else  
            distanceInM = (distanceInM) + ' km';

          r.distance = distanceInM;
        }
        return r;
      });

      if(geolocation.randomLocations.length > 0){
        restaurantsWithLocation.sort((a, b) => this.sortByDistance(a, b));
      }
      this.setState({restaurants: restaurantsWithLocation});
    });
  }
  //Get cullinary options based on restaurants
  getCulinaryOptions = () => {
    return this.state.restaurants.map((restaurant) => {
      return restaurant.culinary;
    }).filter((co, index, a) => {
      //Unify items in array
      return a.indexOf(co) == index;
    });
  }
  //Change state based on options and text passed by FilterComponent
  setFilter = (filterName, filterValue) => {
    let stateObj = this.state.filters;
    stateObj[filterName] = filterValue;
    this.setState({filters: stateObj});
  }

  render() {
    const { classes } = this.props; 
    return (
      <div>
        <div className={classes.header}>
          <img className={classes.imageHeader} src={LOGO_DUO}></img>
          <p className={classes.titleHeader}>Desafio</p>
        </div>
        <Filter setFilter={this.setFilter} culinaryOptions={this.getCulinaryOptions()}/>
        <RestaurantsList filters={this.state.filters} restaurants={this.state.restaurants}/>
      </div>
    );
  }
}

export default (withStyles(style)(App));
