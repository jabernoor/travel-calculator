import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { WithStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Calculator.css'
import { TextField, Divider } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import CalculateIcon from '@material-ui/icons/Casino';

const classes = {
    card:"calculator-card",
    tickets:"tickets",
    accommodation:"accommodation",
    entertainment:"entertainment",
    food:"food",
    transport:"transport",
    gifts:"gifts",
    tickets:"tickets",
}

class Calculator extends Component{

    
    render(){
        return(
            <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" component="h2">
                  Calculator
              </Typography>
              <TextField
                id="tickets"
                label="Tickets Fees"
                type="number"
                className={classes.tickets}
                InputLabelProps={{
                    shrink: true,
                }}
                margin="normal"/>
            <Divider />  
            <TextField
                id="accommodation"
                label="Accommodation"
                type="number"
                className={classes.accommodation}
                InputLabelProps={{
                    shrink: true,
                }}
                margin="normal"/>
             <Divider />                
              <TextField
                id="food"
                label="Food"
                type="number"
                className={classes.food}
                InputLabelProps={{
                    shrink: true,
                }}
                margin="normal"/>
              <Divider />                
              <TextField
                id="entertainment"
                label="Entertainment"
                type="number"
                className={classes.entertainment}
                InputLabelProps={{
                    shrink: true,
                }}
                margin="normal"/>
              <Divider />                

              <TextField
                id="transport"
                label="Transport"
                type="number"
                className={classes.transport}
                InputLabelProps={{
                    shrink: true,
                }}
                margin="normal"/>
              <Divider />                

              <TextField
                id="gifts"
                label="Gifts"
                type="number"
                className={classes.gifts}
                InputLabelProps={{
                    shrink: true,
                }}
                margin="normal"/>

            <Divider/>
            </CardContent>
            <CardActions>
                <Button  variant="contained" color="primary" size="large" className={classes.button} id="calculate" onClick={doCalc}>
                Calculate &nbsp; <CalculateIcon />
                </Button>
            </CardActions>
          </Card>
                        )
    }
}
Calculator.propTypes = {
    classes: PropTypes.object.isRequired,
};

function doCalc(){
    let values = Object.values(classes);
    let sum = 0.0;
    for(var i = 1;i<values.length;++i){
        let val = document.getElementById(values[i]).value || 0.0;
        sum+=parseFloat(val);
    }
    alert(sum);

}   

export default Calculator;
