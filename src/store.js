import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { petsReducer } from './reducers/pets';

const store = createStore(
    petsReducer,
    applyMiddleware(thunk));

store.getState();

export default store;
