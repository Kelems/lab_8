import React from "react";
class Button extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleClick}>{this.props.label}</button>
      </div>
    );
  }
}
export default Button;
