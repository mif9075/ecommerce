import React, { Component } from "react";
import Buttons from "@material-ui/core/Button";

export default class Button extends Component {
  render() {
    return (
      <div>
        <Buttons
          color={this.props.color}
          variant={this.props.variant}
          fullWidth={this.props.fullWidth ? true : false}
          type={this.props.type}
          onClick={this.props.onClick}
          style={this.props.style}
          className={this.props.className}
          disabled={this.props.disabled}
        >
          {this.props.children}
        </Buttons>
      </div>
    );
  }
}
