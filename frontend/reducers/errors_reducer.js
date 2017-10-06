import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/task_actions';

export const errorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
    // debugger
      return [action.errors["error"]];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};
