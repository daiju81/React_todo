import React, { Component } from 'react';

class Todo extends Component {
  render() {
    const className = 'undone';
    const link = this.props.done ? '未完了' : '完了！';
    return (
      <li className={className}>
        <span>{this.props.id}</span>
        <span>：{this.props.title}　　</span>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            this.props.setTodoStatus(this.props);
          }}
        >
          {link}
        </a>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            this.props.deleteTodo(this.props);
          }}
        >
          削除
        </a>
        <p>{this.props.desc}</p>
      </li>
    );
  }
}

export default Todo;
