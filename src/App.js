import React, { Component } from "react";
import "./App.css";

import AddTodo from "./containers/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";

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

  addTodoHandler = text => {
    const newTodo = { text, completed: false, id: Date.now() };

    this.setState({ todoList: [...this.state.todoList, newTodo] });
  };

  removeHandler = (id) => {
    const {todoList} = this.state;
    const newTodoList = todoList.filter(todo => id !== todo.id);
    this.setState({todoList: newTodoList});
  };

  statusChangeHandler = (id, newStatus) => {
    console.log(id, newStatus);
    const index = this.state.todoList.findIndex(todo => todo.id === id);
    const prevTodo = this.state.todoList[index]

    const newTodo = {...prevTodo, completed: newStatus}; //copying the object of todoList [index = 1(say)]
    
    const leftPart = this.state.todoList.slice(0, index);
    const rightPart = this.state.todoList.slice(index +1);

    const newTodoList = [...leftPart, newTodo, ...rightPart]
    this.setState({todoList: newTodoList})
  }

  render() {
    return (
      <div className="App">
        <AddTodo onAddTodo={this.addTodoHandler} />
        <TodoList
          list={this.state.todoList}
          onRemove={this.removeHandler}
          onStatusChange={this.statusChangeHandler}
        />
      </div>
    );
  }
}

export default App;
