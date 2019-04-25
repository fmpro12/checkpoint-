export const POST_PRODUCTS_FAILURE = 'POST_PRODUCTS_FAILURE';
export const POST_PRODUCTS_SUCCESS = "POST_PRODUCTS_SUCCESS ";
export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';

export const postProductsSuccess = hits => ({
  type: POST_PRODUCTS_SUCCESS,
  payload: { hits }
});

export const deleteUserSuccess = hits => ({
  type: DELETE_SUCCESS,
  payload: {hits}  
})

export const postProductsError = error => ({
  type: POST_PRODUCTS_FAILURE,
  payload: { error }
});

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = hits => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { hits }
});

export const fetchProductsError = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

