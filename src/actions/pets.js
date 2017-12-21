import { API_BASE_URL } from '../config';

//Dogs
export const fetchDog = () => dispatch => {
  dispatch(fetchDogsRequest());
  fetch(`${API_BASE_URL}/dog`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }

      return res.json();
    })
    .then(dog => dispatch(fetchDogsSuccess(dog)))
    .catch(error => dispatch(fetchDogsError(error)));
};

export const FETCH_DOGS_REQUEST = 'FETCH_DOGS_REQUEST';
export const fetchDogsRequest = () => ({
    type: FETCH_DOGS_REQUEST,
  });

export const FETCH_DOGS_SUCCESS = 'FETCH_DOGS_SUCCESS';
export const fetchDogsSuccess = dogs => ({
    type: FETCH_DOGS_SUCCESS,
    dogs,
  });

export const FETCH_DOGS_ERROR = 'FETCH_DOGS_ERROR';
export const fetchDogsError = error => ({
    type: FETCH_DOGS_ERROR,
    error,
  });

//Cats
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
