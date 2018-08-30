import React, { Component } from 'react';
import './App.css';
import SingleTodo from './singleTodo';

//https://www.youtube.com/watch?v=3HMtarQAt3A

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      currentTodo: ""
    };
  }

  onChange = e => {
    this.setState({ 
      currentTodo: e.target.value 
    });
  }

  onAdd = () => {
    let todosCopy = this.state.todos.slice();
    // creates a copy of the current state of the todos property. This is functional programming. It's not mutating todos, its creating a copy which we'll use later
    todosCopy.push(this.state.currentTodo);
    // we add the cureentTodo entered in the input to todosCopy

    this.setState({
      todos: todosCopy, currentTodo: ""
      // we set the state of todos, which is now a copy + the current todo
      // and we reset currentTodo to "" to clear it
    });
  }

  deleteTodo = index => {
    let todosCopy = this.state.todos.slice();
    // copies the current state of the todos property
    todosCopy.splice(index, 1);
    // Deletes from the array, the matching index passed in anonymously
    this.setState({ todos: todosCopy });
    // sets the state of the todos property
  }

  render() {
    let bulletedTodos = this.state.todos.map((element, index) => {
      // https://codeburst.io/learn-understand-javascripts-map-function-ffc059264783
      return (
        <SingleTodo key={index} todo={element} delete={() => this.deleteTodo(index)} />
        // returns the SingelTodo Component, whilst passing into it todo and delete props.
        // The delete prop, calls the function deleteTodo
      );
    });
    return (
      <div>
        <input placeholder="Enter Todo" value={this.state.currentTodo} onChange={this.onChange} />
        {/* 
        The value of this input is = to this(Component).state.currentTodo property
        onChange is called with this(Component) method named onChange, which sets the state of currentTodo property, to the current value of the 'target', which in this case is the input
         */}
        <button onClick={this.onAdd}>Add!</button>
        <br/>
        { 
          this.state.todos.length === 0 ? "No todos yet!" : <ul>{bulletedTodos}</ul>
          // this(Component).state(State of component created in constructor).todos(The todos property of the state object).length(How many items in the todos property)
        }
      </div>
    )
  }
}

export default App;
