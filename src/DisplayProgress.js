import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

export default class DisplayProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getStatus = this.getStatus.bind(this);
    this.getStyles = this.getStyles.bind(this);
  }
  getStatus(currentValue) {
    if (currentValue === 100) {
      return 'Complete!';
    } else {
      return `In Progress - ${currentValue}`;
    }
  }

  getStyles(percentage) {
    if (percentage < 33) {
      return 'low';
    } else if (percentage > 33 && percentage < 66) {
      return 'medium';
    } else if (percentage > 66) {
      return 'high';
    }
  }

  render() {
    return (
      <div>
        <h3>{this.getStatus(this.props.value)}</h3>
        <ProgressBar
          width={this.props.value}
          class={this.getStyles(this.props.value)}
        />
      </div>
    );
  }
}
