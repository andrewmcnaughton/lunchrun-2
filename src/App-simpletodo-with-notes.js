import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// https://www.youtube.com/watch?v=3HMtarQAt3A
// https://javascript.info/map-set-weakmap-weakset
// https://codeburst.io/learn-understand-javascripts-map-function-ffc059264783

class App extends Component {
  constructor() {
    super();

    this.state = {
      // javascript object
      count: 0
    };
  }

  increment = () => {
    // a method function
    // arrow function preserves 'this', meaning its refers to the component App than itself.
    this.setState({
      // we dont want to simply do this.state.count++;
      // we have to use function programming and create a pure copy of the state, instead we use:
      count: this.state.count + 1
    });
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return(
      <div>
        <button onClick={this.increment}>Increment</button>
        {/* using onClick={} takes in a function, curly brackets means we're injecting something directly from the javascript, rather than a string or something else */}        
        {this.state.count}
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }

}

export default App;
