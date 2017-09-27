import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createReducer from './reducers';
import { persistStore, autoRehydrate } from 'redux-persist-immutable'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(thunk),
  autoRehydrate()
);

const store = createStore(createReducer(), undefined, enhancers);

persistStore(store)

export default store;
