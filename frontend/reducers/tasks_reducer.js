import { RECEIVE_TASKS, RECEIVE_TASK } from '../actions/task_actions';
import merge from 'lodash/merge';

export const tasksReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TASKS:
    // debugger;
      return action.tasks.tasks;
      // console.log(action.tasks);
    default:
      return state;
  }
};
