import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

export default class DisplayProgress extends Component {
  render() {
    const getStatus = currentValue => {
      if (currentValue >= 100) {
        return 'Complete!';
      } else {
        return `In Progress - ${currentValue}`;
      }
    };

    const getStyles = percentage => {
      if (percentage < 33) {
        return 'low';
      } else if (percentage > 33 && percentage < 66) {
        return 'medium';
      } else if (percentage > 66) {
        return 'high';
      }
    };
    return (
      <div>
        <h3>{getStatus(this.props.value)}</h3>
        <ProgressBar
          width={this.props.value}
          class={getStyles(this.props.value)}
        />
      </div>
    );
  }
}
