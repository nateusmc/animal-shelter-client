import {
    FETCH_DOGS_REQUEST,
    FETCH_DOGS_SUCCESS,
    FETCH_DOGS_ERROR
} from '../actions/dogs';

import {
    FETCH_CATS_REQUEST,
    FETCH_CATS_SUCCESS,
    FETCH_CATS_ERROR
} from '../actions/cats';

const initialState = {
  cats: {},
  dogs: {},
  loading: false,
  error: null,
};

export function petsReducer(state=initialState, action) {
  if (action.type === FETCH_DOGS_REQUEST) {
    return Object.assign({}, state, {
        loading: true,
        error: null,
      });
  } else if (action.type === FETCH_DOGS_SUCCESS) {
    return Object.assign({}, state, {
        loading: false,
        dogs: action.dogs,
      });
  } else if (action.type === FETCH_DOGS_ERROR) {
    return Object.assign({}, state, {
        loading: false,
        error: action.error,
      });
  } else if (action.type === FETCH_CATS_REQUEST) {
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
