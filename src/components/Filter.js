import React, { Component } from 'react';
import { Row, Autocomplete, Input } from 'react-materialize';
import { withStyles } from '@material-ui/core/styles'; 
import style from '../style/style';

class Filter extends Component {
  render() {
    const { classes } = this.props; 
    return (
        <Row className={classes.filter}>
            <Autocomplete s={12} m={8}
                title='Restaurante'
                placeholder='Porcão, Café, ...'
                data={
                    {
                        'Apple': null,
                        'Microsoft': null,
                        'Google': 'http://placehold.it/250x250'
                    }
                }
            />
            <Input s={12} m={4} type='select' label='Tipo de Culinária' defaultValue='1'>
                <option value='1'>Todos</option>
                <option value='2'>option 2</option>
            </Input>
        </Row>
    );
  }
}

export default (withStyles(style)(Filter));
