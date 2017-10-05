import { combineReducers } from 'redux';
import { tasksReducer } from './tasks_reducer';
import { errorsReducer } from './errors_reducer';

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  errors: errorsReducer
});
