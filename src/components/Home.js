import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent } from '@material-ui/core';

class Home extends Component{
    render(){
        return(
            <div id="home-page">
                <header className="App-header">
                    {/* <Card> */}
                    <div class="logo-container">
                    <img src="https://image.flaticon.com/icons/svg/760/760049.svg" className="App-logo" alt="logo" />
                    <p>
                        Welcome to Travel Calculator!
                    </p>
                    {/* <h1 className="App-link">
                        Start Calculating!
                    </h1> */}
                    {/* </Card> */}
                    </div>
                </header>
          </div>
              )
    }
}

export default Home;