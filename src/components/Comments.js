import React, { Component } from 'react';
import { Row, Autocomplete, Input } from 'react-materialize';
import { withStyles } from '@material-ui/core/styles'; 
import style from '../style/style';

class Comments extends Component {
  render() {
    const { classes } = this.props; 
    return (
        <Row className={classes.comments}>
            
        </Row>
    );
  }
}

export default (withStyles(style)(Comments));
