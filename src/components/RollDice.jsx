import { Component } from "react";
import Die from "./Die";
import sound from "../assets/DICE.wav";
class RollDice extends Component {
  constructor(props) {
    super(props);
    // state
    this.state = {
      number1: "d6",
      number2: "d6",
      randomArray: ["one", "two", "three", "four", "five", "six"],
      audio: new Audio(sound),
    };
  }
  // functions
  playGame = () => {
    let num1 =
      this.state.randomArray[
        Math.floor(Math.random() * this.state.randomArray.length)
      ];
    let num2 =
      this.state.randomArray[
        Math.floor(Math.random() * this.state.randomArray.length)
      ];
    this.setState({ number1: num1, number2: num2 });
    this.state.audio.play();
  };
  equalNums = () => {
    return this.state.number1 === this.state.number2;
  };
  buttonText = () => {
    if (this.state.number1 === "d6") {
      return "Start Playing";
    } else if (this.equalNums()) {
      return "Play Again";
    } else {
      return "Roll Dice";
    }
  };
  gameState = () => {
    if (this.equalNums()) {
      return "YOU WIN!!!";
    } else {
      return "TRY AGAIN!";
    }
  };
  // UI
  render() {
    return (
      <div className="Game-Wrapper">
        <div>
          <Die num={this.state.number1} />
          <Die num={this.state.number2} />
        </div>
        <button onClick={this.playGame} className="play-button">
          {this.buttonText()}
        </button>
        {this.state.number1 !== "d6" && (
          <h4 className={this.equalNums() ? "success" : "failed"}>
            {this.gameState()}
          </h4>
        )}
      </div>
    );
  }
}
export default RollDice;
