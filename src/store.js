import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { restaurantsReducer } from './reducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk];

const configureStore = () => {
  const store = createStore(
    restaurantsReducer,
    composeEnhancers(        
      applyMiddleware(
        ...middlewares,
      )
    )
  );
  return store;
};

export default configureStore;