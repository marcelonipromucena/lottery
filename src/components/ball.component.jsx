import React, { Component } from 'react';
import './ball.css';

class Ball extends Component {
  state = {};
  render() {
    return <div className="Ball">{this.props.num}</div>;
  }
}

export default Ball;
