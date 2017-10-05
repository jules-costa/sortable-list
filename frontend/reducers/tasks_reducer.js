import { RECEIVE_TASKS, RECEIVE_TASK } from '../actions/task_actions';
import merge from 'lodash/merge';

export const tasksReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TASKS:
      return action.tasks.tasks;
    default:
      return state;
  }
};
