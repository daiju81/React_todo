import React, { Component } from 'react';
import { Toolbar, Typography, Button, AppBar } from '@material-ui/core';

export class Title extends Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

export class AppHeader extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Todoアプリ</Typography>
          <Button color="inherit">タスク一覧</Button>
        </Toolbar>
      </AppBar>
    );
  }
}
