import { Component } from "react";
class Die extends Component {
  render() {
    return (
      <div className="icon-wrapper">
        <i className={"circle fas fa-dice-" + this.props.num}></i>
      </div>
    );
  }
}
export default Die;