import React from 'react';

class Project extends React.Component {
  render() {
    return(
      <div className="item">
          <span className="project-title"><a href="#hook">{this.props.item.name}</a></span> - <span className="project-tagline">{this.props.item.detail}</span>

      </div>
    );
  }
}

export default Project;
