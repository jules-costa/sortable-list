export const RECEIVE_TASK = "RECEIVE_TASK";
export const RECEIVE_TASKS = "RECEIVE_TASKS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

import * as APIUtil from '../util/task_util';

// export const receiveSingleTask = (task) => ({
//   type: RECEIVE_TASK,
//   task
// });

export const receiveAllTasks = (tasks) => ({
  type: RECEIVE_TASKS,
  tasks
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const fetchTasks = () => dispatch => (
  APIUtil.fetchTaskList().then(tasks => dispatch(receiveAllTasks(tasks)))
);

export const saveTasks = (allTasks) => dispatch => (
  APIUtil.saveTaskList(allTasks).then(tasks => dispatch(receiveAllTasks(tasks)))
);

// export const createTask = (newTask) => dispatch => (
//   APIUtil.saveTask(newTask).then(tasks => {
//     dispatch(receiveSingleTask(tasks));
//     dispatch(clearErrors());
//   }).fail(err => dispatch(receiveErrors(err.responseJSON)))
// );
