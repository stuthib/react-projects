import React from 'react';
import QuizOptions from './QuizOptions';
import classNames from 'classnames';

class Quiz extends React.Component {

  constructor(props) {
    super(props);
    let riddle = this.playGame();
    this.state = {
      riddle,
      isCorrect: false,
      isGameOver: false
    }
    this.renderOptions = this.renderOptions.bind(this);
    this.renderMessage = this.renderMessage.bind(this);
    this.playAgain = this.playAgain.bind(this);
  }

  randomNumber(min, max) {
    return Math.floor( Math.random() * (max - min + 1)) + min;
  }

  playGame() {
    let field1 = this.randomNumber(20,50);
    let field2 = this.randomNumber(20,50);
    let result = field1 + field2;
    let resultsArray = this.generateRandomOptions(result);
		resultsArray.push(result);
		resultsArray.sort(function(a,b) {return 0.5 - Math.random()});
    let riddle = {
      field1 : field1,
      field2 : field2,
      resultOptions : resultsArray,
      answer : result
    }
    return riddle;
  }

  generateRandomOptions(sum) {
		// let result = sum;
		let resultsArray = [];
		let randomNumberArray = [];

		while (randomNumberArray.length <= 3) {
			let randomNumber = this.randomNumber(1, 19);
			if(randomNumberArray.indexOf(randomNumber) > -1) continue;
			randomNumberArray.push(randomNumber);
		}

		for(let i = 0; i < 3; i++) {
			let addSubtract = this.randomNumber(0,1);
			let result = sum;
			if(addSubtract === 1) {
				//add the number to the result
				result += randomNumberArray[i];
				resultsArray.push(result);
			} else {
				//subtract the number from the result
				result -= randomNumberArray[i];
				resultsArray.push(result);
			}
		}

		return resultsArray;
	}

  handleResultClick(option) {
    if(this.state.riddle.answer === option) {
      this.setState((prevState) => {
        return{
          isCorrect: true,
          isGameOver: true
        };
      });
    } else {
      this.setState((prevState) => {
        return{
          isCorrect: false,
          isGameOver: true
        }
      });
    }
  }

  renderMessage() {
    if(this.state.Correct) {
      return <h3>Good job! Click "Play Again".</h3>;
    } else {
      return <h3>Oh! Wrong answer. Click "Play Again" to try once more.</h3>;
    }
  }

  playAgain() {
    let riddle = this.playGame();
    this.setState((prevState) => {
      return{
        riddle: riddle,
        isCorrect: false,
        isGameOver: false
      };
    });
  }
  renderOptions() {
    return(
      <div className="options">
        { this.state.riddle.resultOptions.map((option, i) => {
            return(
              <QuizOptions
                option={option}
                key={i}
                onResultClick={(option) => this.handleResultClick(option)}
              />
            );
        })};
      </div>
    );
  }

  render() {
    return(
      <div className="quiz">
        <div className="quiz-content">
          Welcome to the Brain Teaser Game!
        </div>
        <hr />
        <div className="quiz-content">
          <p className="question">
            What is the sum of <span className="text-info">{this.state.riddle.field1}</span> + <span className="text-info">{this.state.riddle.field2}</span>
          </p>
        </div>
        {this.renderOptions()}
        <div className={
            classNames(
                'after',
                {'correct animated zoomInDown': this.state.isCorrect},
                {'wrong animated zoomInDown': !this.state.isCorrect},
                {'hide': !this.state.isGameOver}
            )}>
          {this.renderMessage()}
        </div>
        <div className="play-again">
          <a className="button" onClick={this.playAgain}>Play Again</a>
        </div>
      </div>
    );
  }
}
export default Quiz;
