import React, { PureComponent } from "react";

export default class Button extends PureComponent {
  render() {
    return (
      <button
        {...this.props}
        style={{
          color: this.props.danger ? "red" : "green",
          fontSize: this.props.size === "xl" ? "2rem" : "1rem",
          background: "none",
          border: `2px solid ${this.props.danger ? "red" : "green"}`,
          borderRadius: "5px",
          margin: "5px"
        }}
      >
        {this.props.children}
      </button>
    );
  }
}
