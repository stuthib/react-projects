import React, { Component } from 'react';

class Clock extends Component {

constructor(props) {
  super(props);
  this.state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }
}

  getTimeUntil(deadline) {
    let time = Date.parse(deadline) - Date.parse(new Date());

    let seconds = Math.floor((time/ 1000) % 60);
    let minutes = Math.floor(time/ (1000 * 60) % 60);
    let hours = Math.floor(time/ (1000 * 60 * 60) % 24);
    let days = Math.floor(time / (1000 * 60 * 60 * 24));

    this.setState({ days, hours, minutes, seconds });
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    setInterval( () => {this.getTimeUntil(this.props.deadline), 1000} )
  }

  leading0(num) {
    return num > 10 ? num : '0' + num;
  }

  render() {
    return(
      <div>
        <div className="Clock-days">{this.leading0(this.state.days)} days</div>
        <div className="Clock-hours">{this.leading0(this.state.hours)} hours</div>
        <div className="Clock-minutes">{this.leading0(this.state.minutes)} minutes</div>
        <div className="Clock-seconds">{this.leading0(this.state.seconds)} seconds</div>
      </div>
    );
  }
}

export default Clock;
