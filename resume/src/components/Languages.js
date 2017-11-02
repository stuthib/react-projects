import React from 'react';

class Languages extends React.Component {
  render() {
    return(
        <li>{this.props.item.name} <span className="lang-desc">({this.props.item.details})</span></li>
    );
  }
}

export default Languages;
