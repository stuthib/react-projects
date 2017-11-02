import React from 'react';
import Details from './Details';

class Experience extends React.Component {
  renderDetails() {
    let details = this.props.item.details;
    let resultDetails = [];
    Array.prototype.forEach.call(details, child => {
      resultDetails.push(<Details detail={child} key={child}/>);
    });
    return resultDetails;
  }

  render() {
    return(
      <div className="item">
          <div className="meta">
              <div className="upper-row">
                  <h3 className="job-title">{this.props.item.title}</h3>
                  <div className="time">{this.props.item.period}</div>
              </div>
              <div className="company">{this.props.item.company}</div>
          </div>
          <div className="details">
              {this.renderDetails()}
          </div>
      </div>
    );
  }
}

export default Experience;
