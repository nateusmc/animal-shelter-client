import { REACT_APP_API_BASE_URL } from '../config';

//Get Dog

export const fetchDog = () => dispatch => {
  dispatch(fetchDogRequest());

  fetch(`${REACT_APP_API_BASE_URL}/dog`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(dog => {
      dispatch(fetchDogSuccess(dog));
    })
    .then(error => fetchDogError(error));
};

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest = () => ({
  type: FETCH_DOG_REQUEST
});


export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError = error => ({
  error,
  type: FETCH_DOG_ERROR,
});

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = data => ({
  data,
  type: FETCH_DOG_SUCCESS
});


//Delete Dog

export const adoptDog = () => dispatch => {
  dispatch(adoptDogRequest());

  fetch(`${REACT_APP_API_BASE_URL}/dog`, { method: 'DELETE' })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.statusText;
    })
    .then(dog => {
      dispatch(adoptDogSuccess());
    })
    .then(() =>
      dispatch(fetchDog())
    )
    .then(error => adoptDogError(error));
};

export const ADOPT_DOG_REQUEST = 'ADOPT_DOG_REQUEST';
export const adoptDogRequest = () => ({
  type: ADOPT_DOG_REQUEST

});

export const ADOPT_DOG_ERROR = 'ADOPT_DOG_ERROR';
export const adoptDogError = () => ({
  type: ADOPT_DOG_ERROR
});

export const ADOPT_DOG_SUCCESS = 'ADOPT_DOG_SUCCESS';
export const adoptDogSuccess = () => ({
  type: ADOPT_DOG_SUCCESS
});
