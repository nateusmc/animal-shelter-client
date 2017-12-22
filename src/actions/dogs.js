import { API_BASE_URL } from '../config';

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
