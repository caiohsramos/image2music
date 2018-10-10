import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './Menu'
import Routes from './Routes'

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Menu />
          <Routes />
        </>
      </Router>
    );
  }
}

export default App;
