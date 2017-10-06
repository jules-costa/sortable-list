import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { configureStore } from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  // TODO: remove from window
  window.getState = store.getState;
  let root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
