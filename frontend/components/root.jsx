import React from 'react';
import App from './app';
import { Provider } from 'react-redux';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

const Root = ({ store }) => (
  <Provider store={ store }>
    <App />
  </Provider>
);

export default DragDropContext(HTML5Backend)(Root);
