'use strict';
import alt from './alt';

export default class TodoActions {
  init(todos) {
    this.dispatch(todos);
  }
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
