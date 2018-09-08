import React, { Component } from 'react';
import { Row, Input } from 'react-materialize';
import { withStyles } from '@material-ui/core/styles'; 
import style from '../style/style';

class Filter extends Component {
    returnCulinaryOptions = (culinaryOptions) => {
        return culinaryOptions.map((culinary, index) => {
            return (
              <option key={index} value={culinary}>{culinary}</option>  
            );
        })
    }

    render() {
        const { classes } = this.props; 
        return (
            <Row className={classes.filter}>
                <Input type="text" s={12} m={8}
                    label='Restaurante'
                    placeholder='Porcão, Café, ...'
                    onChange={(ev) => {this.props.setFilter('name', ev.target.value)}}
                />
                <Input type='select' s={12} m={4} 
                    label='Tipo de Culinária' 
                    defaultValue=""
                    onChange={(ev) => {this.props.setFilter('culinary', ev.target.value)}}>
                    <option value="">Todos</option>
                    {
                        this.returnCulinaryOptions(this.props.culinaryOptions)
                    }
                </Input>
            </Row>
        );
    }
}

export default (withStyles(style)(Filter));
