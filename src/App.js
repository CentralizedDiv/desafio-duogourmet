import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'; 
import RestaurantsList from './components/RestaurantsList';
import Filter from './components/Filter';
import style from './style/style';

class App extends Component {
  render() {
    const { classes } = this.props; 
    return (
      <div>
        <div className={classes.header}>
          <img className={classes.imageHeader} src="https://www.duogourmet.com.br/img/logo-white.png"></img>
          <p className={classes.titleHeader}>Desafio</p>
        </div>
        <Filter />
        <RestaurantsList />
      </div>
    );
  }
}

export default (withStyles(style)(App));
