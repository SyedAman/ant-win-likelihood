import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles'

import NavBar from '../../components/NavBar'
import Upcoming from '../Upcoming'

import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <NavBar title="Match Center" />
          <Upcoming />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
