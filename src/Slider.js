import React, { Component } from 'react';

export default class Slider extends Component {
  render() {
    return (
      <div>
        <input
          type="range"
          min="0"
          max="100"
          value={this.props.value}
          onChange={e => this.props.setValue(e.target.value)}
        />
      </div>
    );
  }
}
