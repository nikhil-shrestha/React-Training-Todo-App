import React, { Component } from "react";
import "./App.css";

import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from './components/TodoList/TodoList'

class App extends Component {
  state = {
    todoList: [
      {
        id: 1,
        text: "test test",
        completed: "false"
      }
    ]
  };

  addTodoHandler = (text) => {
    const newTodo = {text, completed: false, id: Date.now()};

    this.setState({todoList: [...this.state.todoList, newTodo]});
  }

  render() {
    return (
      <div className="App">
        <AddTodo onAddTodo={this.addTodoHandler}/>
        <TodoList list={this.state.todoList}/>
      </div>
    );
  }
}

export default App;
