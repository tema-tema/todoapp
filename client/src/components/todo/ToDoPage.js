import React, { PropTypes } from 'react';
import PureComponent from './PureComponent';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import AddTodo from './AddTodo';


class ToDoPage extends PureComponent {

  static propTypes = {
    activeFilter: PropTypes.string.isRequired,
    todoList: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    const { dispatch, activeFilter, todoList } = this.props;
    return (
      <div className="todoapp">
        <div className="todos">
          <AddTodo dispatch={dispatch} />
          <TodoList dispatch={dispatch} activeFilter={activeFilter} todoList={todoList} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.todos });

export default connect(mapStateToProps)(ToDoPage);
