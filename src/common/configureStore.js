import { compose, createStore, applyMiddleware } from 'redux';
import catchErrors from './catchErrors';

import rootReducer from './reducer';

const middlewares = [catchErrors];
const enhancers = [];

if (process.env.NODE_ENV === 'development') {
  const { __REDUX_DEVTOOLS_EXTENSION__ } = window;
  if (typeof __REDUX_DEVTOOLS_EXTENSION__ === 'function') {
    enhancers.push(__REDUX_DEVTOOLS_EXTENSION__());
  }
}


const configureStore = (initialState) => {
  const composeResult = compose(applyMiddleware(...middlewares), ...enhancers);
  return composeResult(createStore)(rootReducer, initialState);
};

export default configureStore;
