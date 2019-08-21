import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  render() {
    return (
      <div>
        <TodoForm></TodoForm>
        <TodoList></TodoList>
      </div>
    );
  }
}

export default App;
