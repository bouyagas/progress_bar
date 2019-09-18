import React, { Component } from 'react';

export default class ProgressBar extends Component {
  render() {
    return (
      <div className="bar">
        <div
          className={this.props.class}
          style={{ width: `${this.props.width}%` }}
        ></div>
      </div>
    );
  }
}
