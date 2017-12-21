import { API_BASE_URL } from '../config';

export const fetchCat = () => dispatch => {
  dispatch(fetchCatsRequest());
  fetch(`${API_BASE_URL}/cat`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }

      return res.json();
    })
    .then(dog => dispatch(fetchCatsSuccess(dog)))
    .catch(error => dispatch(fetchCatsError(error)));
};

export const FETCH_CATS_REQUEST = 'FETCH_CATS_REQUEST';
export const fetchCatsRequest = () => ({
    type: FETCH_CATS_REQUEST,
  });

export const FETCH_CATS_SUCCESS = 'FETCH_CATS_SUCCESS';
export const fetchCatsSuccess = cats => ({
    type: FETCH_CATS_SUCCESS,
    cats,
  });

export const FETCH_CATS_ERROR = 'FETCH_CATS_ERROR';
export const fetchCatsError = error => ({
    type: FETCH_CATS_ERROR,
    error,
  });
