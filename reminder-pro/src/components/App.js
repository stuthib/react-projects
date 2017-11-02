import React, { Component } from 'react';
import '../App.css';

class App extends Component {
  render() {
    return(
      <div className="App text-center">
        <div className="Title">
          Reminder Pro
        </div>
        <div className="form-inline text-center">
          <div className="form-group">
            <input className="form-control" placeholder="I have to... " />
          </div>
          <button
            className="btn btn-success  Input-submit">
              Add Reminder
          </button>
        </div>
      </div>
    );
  }
}

export default App;
