import {  
  POST_PRODUCTS_SUCCESS,  
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE, 
  DELETE_SUCCESS
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
         
        case DELETE_SUCCESS:
        return Object.assign({}, {hits: state.hits.filter(item => item._id !== action.payload.hits._id),
          loading: false,
        })


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


      default:

        return state;
    }
  }