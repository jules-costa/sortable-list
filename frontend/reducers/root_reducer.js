import { combineReducers } from 'redux';
import { tasksReducer } from './tasks_reducer';
import { taskReducer } from './task_reducer';

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  task: taskReducer
});
