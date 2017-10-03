import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { configureStore } from './store/store';
import {fetchTaskList, saveTaskList} from './util/task_util';


document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  window.fetchTaskList = fetchTaskList;
  window.saveTaskList = saveTaskList;
  window.getState = store.getState();
  let root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
