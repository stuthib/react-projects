import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {

constructor(props) {
  super(props);
  this.state = {
    deadline: 'December 20, 2017',
    newDeadline: ''
  };

  console.log(this.state);
}

changeDeadline() {
  this.setState({ deadline: this.state.newDeadline });
}

  render() {
    return(
      <div className="App">
        <span className="Header-content">
          Countdown to {this.state.deadline}
        </span>
        <Clock deadline={this.state.deadline} />
        <Form inline>
          <FormControl className="Deadline-input"
            placeholder="enter date"
            onChange={ event => this.setState({ newDeadline: event.target.value }) }
          />
          <Button onClick={ () => this.changeDeadline() }>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;
