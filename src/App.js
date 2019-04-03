import React, { Component } from 'react';
import './App.css';
import './components/Calculator.css'

import Calculator from './components/Calculator';
import { Tab, Tabs, AppBar } from '@material-ui/core';
import Home from './components/Home';

class App extends Component {
  state = {
    value: 'Home',
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
  <div className="App">
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab value="Home" label="Home" />
            <Tab value="Calculator" label="Calculator" />
          </Tabs>
        </AppBar>

        {value === 'Home' && <Home/>}
        {value === 'Calculator' && <Calculator/>}


      </div>
    
    );
  }
}

export default App;
