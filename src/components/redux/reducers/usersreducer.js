import {  
  POST_PRODUCTS_SUCCESS,
  POST_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from '../actions/actioncreators'


  const initialState = {
    hits: [],
    loading: false,
    error: null
  };
  
  export function ReducerUsers(state = initialState, action) {
    switch(action.type) {
      case FETCH_PRODUCTS_BEGIN:

        return {
          ...state,
          loading: true,
          error: null
        }; 
  

        case POST_PRODUCTS_SUCCESS:
        return {
          ...state,
          loading: false,
          hits: [...state.hits,action.payload.hits]
        };

      case FETCH_PRODUCTS_SUCCESS:

        return {
          ...state,
          loading: false,
          hits: action.payload.hits
        };
  
      case FETCH_PRODUCTS_FAILURE:

        return {
          ...state,
          loading: false,
          error: action.payload.error,
          hits: []
        };

        case POST_PRODUCTS_FAILURE:

        return {
          ...state,
          loading: false,
          error: action.payload.error,
          hits: []
        };

      default:

        return state;
    }
  }