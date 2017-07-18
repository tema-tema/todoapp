import React, { Component, PropTypes } from 'react';
import { addTodo } from '../../actions/todos';

export default class AddTodo extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  shouldComponentUpdate() {
    return false;
  }

  addTodo(e) {
    e.preventDefault();
    const input = this.refs.todo;
    const value = input.value.trim();
    if (value) {
      this.props.dispatch(addTodo(value));
      input.value = '';
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.addTodo(e)}>
          <input className="form-control" type="text" placeholder="What needs to be done?" ref="todo"/>
        </form>
        <br/>
      </div>
    );
  }
}
