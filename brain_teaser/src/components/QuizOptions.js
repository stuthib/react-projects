import React from 'react';

class QuizOptions extends React.Component {

  constructor(props) {
    super(props);
    this.onResultClick = this.onResultClick.bind(this);
  }

  onResultClick() {
    this.props.onResultClick(this.props.option);
    console.log(this.props.option);
  }

  render() {
    return(
      <div className="fields animated zoomIn" onClick={this.onResultClick}>
        <div className="field-block">
          {this.props.option}
        </div>
      </div>
    );
  }
}

export default QuizOptions;
