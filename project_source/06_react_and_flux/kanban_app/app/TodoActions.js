'use strict';
import alt from './alt';

class TodoActions {
  createTodo(task) {
    this.dispatch(task);
  }
  updateTodo(id, task) {
    this.dispatch({id, task});
  }
  removeTodo(id) {
    this.dispatch(id);
  }
}

export default alt.createActions(TodoActions);
