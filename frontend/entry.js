import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './components/root';
import { configureStore } from './store/store';

// import {fetchTasks} from './actions/task_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  // window.fetchTasks = fetchTasks;
  // TODO: remove from window
  window.getState = store.getState();
  let root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
