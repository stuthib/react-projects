import React from 'react';
import alphabets from './Alphabets.json';
import classNames from 'classnames';

class EasyABC extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      alphabets: alphabets,
      currentLetter: 0,
      currentTick: 0,
      isRandom: false,
      isMute: false
    };
    this.handleNextBtnClick = this.handleNextBtnClick.bind(this);
    this.handlePrevBtnClick = this.handlePrevBtnClick.bind(this);
    this.playSound = this.playSound.bind(this);
    this.handleRandomBtnClick = this.handleRandomBtnClick.bind(this);
    this.handleMuteBtnClick = this.handleMuteBtnClick.bind(this);
  }

  handleNextBtnClick() {
    let letter;
    let tick = this.state.currentTick;

    if(this.state.isRandom && tick === 2) {
      letter = this.generateRandom(0, 25);
    } else {
      letter = this.state.currentLetter;
    }
    if(tick < 2) {
      this.setState(() => {
        return {
          currentTick: tick + 1
        }
      });
    } else {
      letter = (letter === alphabets.length-1) ? 0 : letter + 1;
      this.setState(() => {
        return {
          currentLetter: letter,
          currentTick: 0
        }
      });
    }
  }

  handlePrevBtnClick() {
    let letter;
    let tick = this.state.currentTick;
    if(this.state.isRandom && tick === 0) {
      letter = this.generateRandom(0, 25);
    } else {
      letter = this.state.currentLetter;
    }
    if(tick > 0) {
      this.setState(() => {
        return {
          currentTick: tick - 1
        }
      });
    } else {
      letter = (letter === 0) ? alphabets.length - 1  : letter - 1;
      this.setState(() => {
        return {
          currentLetter: letter,
          currentTick: 0
        }
      });
    }
  }

  componentDidMount() {
    let letterSound = document.querySelector(`audio[data-key="letter"]`);
    if(this.state.currentLetter === 0) {
      letterSound.currentTime = 0;
      if(!this.state.isMute) {
        this.playSound();
      }
    }
  }

  componentDidUpdate() {
    if(!this.state.isMute){
      this.playSound();
    }
  }

  playSound() {
    let tick = this.state.currentTick;
    let letterSound = document.querySelector(`audio[data-key="letter"]`);
    let wordSound = document.querySelector(`audio[data-key="word"]`);
    if(tick === 0) {
      letterSound.currentTime = 0;
      letterSound.play();
    } else {
      wordSound.currentTime = 0;
      wordSound.play();
    }
  }

  handleRandomBtnClick() {
    this.setState((prevState) => {
      return {
        isRandom: !prevState.isRandom
      }
    });
  }

  generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  handleMuteBtnClick() {
    this.setState((prevState) => {
      return {
        isMute: !prevState.isMute
      }
    })
  }

  render() {
    const index = this.state.currentLetter;
    const alphabet = this.state.alphabets[index];

    let showImage = (this.state.currentTick !== 0) ? true : false;
    let showWord = (this.state.currentTick === 2) ? true : false;
    return(
      <div className="game">
        <span className="random-label">Random Letters: </span>
        <label className="switch">
          <input type="checkbox"
                 defaultValue="false"
                 checked={this.state.isRandom}
                 onClick={this.handleRandomBtnClick} />
          <div className="slider round"></div>
        </label>
        <span className="random-label">Mute: </span>
        <label className="switch">
          <input type="checkbox"
                 defaultValue="false"
                 checked={this.state.isMute}
                 onClick={this.handleMuteBtnClick} />
          <div className="slider round"></div>
        </label>
        <div className="option">
          <div className="fields">
            <div className="field-block">{alphabet.letter}</div>
            <audio src={alphabet.letterSound} data-key="letter"></audio>
          </div>
          <div className="buttons">
            <a className="button prev" onClick={this.handlePrevBtnClick}>Previous</a>
            <a className="button sound" onClick={this.playSound}>Play Sound</a>
            <a className="button next" onClick={this.handleNextBtnClick}>Next</a>
          </div>
          <div className="fields">
            <div className="field-block">
              <div className="left-field">
                <div className={classNames('placeholder-span', {hide: showImage})}>Click Next to view Image</div>
                <img className={classNames('letter-image', {hide: !showImage})} src={alphabet.image} alt={alphabet.letter}/>
                <audio src={alphabet.wordSound} data-key="word"></audio>
              </div>
              <div className="right-field">
                <div className={classNames('placeholder-span', {hide: showWord})}>Click Next to view the spelling</div>
                <div className={classNames('word', {hide: !showWord})}>{alphabet.word.toUpperCase()}</div>
                <audio src={alphabet.wordSound}></audio>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EasyABC;
