import React, { Component } from 'react';
import Todo from './Todo';
import '../css/index.css';

class TodoList extends Component {
  render() {
    const todos = this.props.todos.map((todo) => (
      <Todo
        key={todo.id}
        {...todo}
        setTodoStatus={this.props.setTodoStatus}
        deleteTodo={this.props.deleteTodo}
      />
    ));
    if (this.props.isLoading) {
      return <h2>loading . . . </h2>;
    }

    if (this.props.hasError) {
      return <h2>error</h2>;
    }

    return <ul>{todos}</ul>;
  }
}

export default TodoList;
