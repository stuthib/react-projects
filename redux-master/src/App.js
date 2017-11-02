import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome {this.props.userNmae}</h1>
        </header>
        <p className="App-intro">
          {this.props.note}
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userNmae: state.user.userNmae,
  note: state.notes.note
})
export default connect(mapStateToProps)(App);
