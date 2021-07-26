import { Component } from "react";
import RollDice from "./components/RollDice";
import "./styles/die.css";
class App extends Component {
  render() {
    return (
      <div>
        <RollDice />
      </div>
    );
  }
}
export default App;
