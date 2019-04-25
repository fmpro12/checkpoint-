import {
  fetchProductsBegin,
  fetchProductsError,
  fetchProductsSuccess
} from './actioncreators'

export function fetchUsers() {
    return dispatch => {
      dispatch(fetchProductsBegin());
      return fetch("/api/users")
        .then(handleErrors)
        .then(res => res.json().then(console.log(res)))
        .then(json => {
          dispatch(fetchProductsSuccess(json));
          return json;
        })
        .catch(error => dispatch(fetchProductsError(error)));
    };
  }

    

  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

