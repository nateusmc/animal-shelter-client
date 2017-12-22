import { combineReducers } from 'redux';
import catsReducer from './cats';
import dogsReducer from './dogs';

const rootReducer = combineReducers({
  catsReducer,
  dogsReducer,
});

export default rootReducer;
