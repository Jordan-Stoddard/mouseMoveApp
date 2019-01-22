import React, { Component } from 'react';
import './App.css';

function transform(offset) {
  const cos = Math.cos(offset);
  const sin = Math.sin(offset);
  return {
    transform: `matrix3d(${sin}, ${-cos}, ${sin}, 0, ${-cos}, ${sin}, 0, 0, 0, ${cos}, ${cos}, ${sin}, 0, 0, 0, 1)`
  };
}

class App extends Component {
  state = {
    styleOne: {},
    styleTwo: {}
  };

  onMouseMove = e => {
    this.setState({
      styleOne: transform(-e.clientX / e.clientY),
      styleTwo: transform(e.clientX / e.clientY)
    });
  };
  
  render() {
    return (
      <div >
        
      </div>
    );
  }
}

export default App;
