import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

import contactus from './reducers/contactus';
const reducer = combineReducers({
  contactus: contactus
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
