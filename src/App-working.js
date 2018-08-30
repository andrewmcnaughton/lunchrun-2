import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      currentTodo: ''
    }
  }

  onInputChange = e => {
    this.setState({
      currentTodo: e.target.value
    });
  }

  onAddTodo = () => {
    let newTodos = this.state.todos.slice();
    newTodos.push(this.state.currentTodo);
    this.setState({
      todos: newTodos,
      currentTodo: ''
    });
  }

  onDeleteTodo = index => {
    let newTodos = this.state.todos.slice();
    newTodos.splice(index, 1);
    this.setState({
      todos: newTodos
    });
  }

  render() {
    let todoList = this.state.todos.map((element, index) => {
      return(
        <li key={index}>{element} <button onClick={() => this.onDeleteTodo(index)}>x</button></li>
      )
    });

    let numItems = todoList.length;

    return(
      <div className="App">
        <h1>Killer Todo List</h1>
        <p>
          {numItems} {numItems === 1 ? 'item' : 'items'}
        </p>
        <input className="input" value={this.state.currentTodo} onChange={this.onInputChange}></input> <button onClick={this.onAddTodo}>Add!</button><br />
        <ul>{todoList}</ul>
      </div>
    )
  }
}

export default App;