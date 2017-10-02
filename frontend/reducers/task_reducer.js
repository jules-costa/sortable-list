import { RECEIVE_TASK } from '../actions/task_actions';

export const taskReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TASK:
      return action.task;
    default:
      return state;
  }
};
