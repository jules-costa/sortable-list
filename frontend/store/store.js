import { createStore } from 'redux';
import { rootReducer } from '../reducers/root_reducer';

// applyMiddleware ?

export const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState
  )
);
