import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

import tickets from './reducers/tickets';

const reducer = combineReducers({
  tickets: tickets
});

const configureStore = () => {
  return createStore(
    reducer,
    compose(
      applyMiddleware(thunk)
      // window.__REDUX_DEVTOOLS_EXTENSION__ &&
      //   window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
};

export const store = configureStore();
