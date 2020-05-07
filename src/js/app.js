import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { AppHeader } from './Components';
import Form from './Form';
import '../css/App.css';
import '../css/AppHeader.css';

class App extends Component {
  constructor() {
    super();
    const todos = [
      {
        id: 1,
        title: '勉強',
        desc: '勉強',
        done: false,
      },
    ];
    this.state = {
      todos,
      countTodo: todos.length + 1,
    };
    this.setTodoStatus = this.setTodoStatus.bind(this);
  }

  setTodoStatus(clickTodo) {
    const todos = this.state.todos.slice();
    const todo = todos[clickTodo.id - 1];
    todo.done = !todo.done;
    todos[clickTodo.id - 1] = todo;

    this.setState({ todos });
  }

  deleteTodo(clickTodo) {
    const todos = this.state.todos.slice();
    delete todos[clickTodo.id - 1];

    this.setState({ todos });
  }

  handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const desc = e.target.desc.value;
    const todos = this.state.todos.slice();
    const countTodo = this.state.countTodo;

    todos.push({
      id: countTodo,
      title,
      desc,
      done: false,
    });

    this.setState({ todos });
    this.setState({ countTodo: countTodo + 1 });

    e.target.title.value = '';
    e.target.desc.value = '';
  }
  render() {
    return (
      <div className="app">
        <AppHeader />
        <br />
        <Form handleSubmit={this.handleSubmit.bind(this)} />
        <TodoList
          todos={this.state.todos}
          setTodoStatus={this.setTodoStatus}
          deleteTodo={this.deleteTodo.bind(this)}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
