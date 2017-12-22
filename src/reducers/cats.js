import {
  FETCH_CATS_REQUEST,
  FETCH_CATS_SUCCESS,
  FETCH_CATS_ERROR
} from '../actions/cats';

const initialState = {
  cats: null,
  dogs: null,
  loading: false,
  error: null,
};

export default function catsReducer(state = initialState, action) {
  if (action.type === FETCH_CATS_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null,
    });
  } else if (action.type === FETCH_CATS_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      cats: action.cats,
    });
  } else if (action.type === FETCH_CATS_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error,
    });
  }

  return state;
}
