import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './components/root';
import { configureStore } from './store/store';

import { saveTaskList } from './util/task_util';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  // TODO: remove from window
  window.getState = store.getState;
  window.saveTaskList = saveTaskList;
  let root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
