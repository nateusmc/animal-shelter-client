import {
  FETCH_DOGS_REQUEST,
  FETCH_DOGS_SUCCESS,
  FETCH_DOGS_ERROR
} from '../actions/dogs';

const initialState = {
  cats: null,
  dogs: null,
  loading: false,
  error: null,
};

export default function dogsReducer(state = initialState, action) {
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
  }

  return state;
}
