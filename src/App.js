import React, { Component } from 'react';
import DisplayProgress from './DisplayProgress';
import Slider from './Slider';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.setValue = this.setValue.bind(this);
  }

  setValue(newValue) {
    this.setState({ value: newValue });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Progress Bar</h1>
          <DisplayProgress value={this.state.value} />
          <Slider value={this.state.value} setValue={this.setValue} />
        </header>
      </div>
    );
  }
}
