import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          Link
          </a>
          <spam>
            <br/>
            {process.env.REACT_APP_CLIENT_ID}
            <br/>
            {process.env.REACT_APP_CLIENT_SECRET}
          </spam>
        </header>
      </div>
    );
  }
}

export default App;
