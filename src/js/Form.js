import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import '../css/form.css';

class Form extends Component {
  render() {
    return (
      <div className="form">
        <form onSubmit={this.props.handleSubmit} style={{ width: '100%' }}>
          <TextField
            name="title"
            id="outlined-basic"
            label="title"
            variant="outlined"
            required
            placeholder="タイトル"
            style={{ width: '80%' }}
          />
          <br />
          <br />
          <TextField
            id="outlined-multiline-static"
            label="タスク名"
            name="desc"
            multiline
            rows={4}
            variant="outlined"
            style={{ width: '80%' }}
          />
          <br />
          <br />
          <Button type="submit" variant="contained" color="primary">
            Send
          </Button>
        </form>
      </div>
    );
  }
}

export default Form;
