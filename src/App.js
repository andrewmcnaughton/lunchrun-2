import React from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import './App.css';

const SortableItem = SortableElement(({value, sortIndex, onDeleteTodo}) =>
  <div className="item"><p>{value} <button onClick={() => onDeleteTodo(sortIndex)}>x</button></p></div> 
);

const SortableList = SortableContainer(({items, onDeleteTodo}) => {
  return (
    <div id="itme-add-form">
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} sortIndex={index} onDeleteTodo={onDeleteTodo} />
      ))}
    </div>
  );
});

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [],
      currentTodo: ''
    }
  }  

  onInputChange = e => {
    this.setState({
      currentTodo: e.target.value
    });
  }
  
  onAddTodo = event => {
    let newTodos = this.state.items.slice();
    newTodos.push(this.state.currentTodo);
    event.preventDefault();
    this.setState({
      items: newTodos,
      currentTodo: ''
    });
  }
  
  onDeleteTodo = index => {
    let newTodos = this.state.items.slice();
    newTodos.splice(index, 1);
    this.setState({
      items: newTodos
    });
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };

  render() {
    let todoList = this.state.items.map((element) => {
      return (
        {element}
      )
    });
    let numItems = todoList.length;

    return (
      <div className="item-list-container">
        <h1>Lunch Run!</h1>
        
        <p className="counter">
          {numItems} {numItems === 1 ? 'item' : 'items'}
        </p>        

        <SortableList items={this.state.items} onSortEnd={this.onSortEnd} onDeleteTodo={this.onDeleteTodo} />
        <div className="input-field">
          <form onSubmit={this.onAddTodo}>
          <input className="input" value={this.state.currentTodo} onChange={this.onInputChange} placeholder="Add to list"></input>
          </form>
        </div>
      </div>
    )
  }
}

export default App;