import React, { Component } from "react";
import Buttons from "@material-ui/core/Button";

export default class Button extends Component {
  render() {
    return (
      <div>
        <Buttons>
          color={this.props.color}
          variant={this.props.variant}
          type={this.props.type}
          disable={this.props.disabled}
          onClick={this.props.onClick}
          style={this.props.style}
        </Buttons>
        {this.props.children}
      </div>
    );
  }
}
