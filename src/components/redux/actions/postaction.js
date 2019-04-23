import axios from "axios"
import {fetchProductsBegin, fetchProductsError, postProductsSuccess} from './actioncreators'


export function postsubmit(values) {  
      return dispatch => {
        dispatch(fetchProductsBegin());
        return axios.post('http://127.0.0.1:3010/api/users', {values})        
          .then(json => {    
            dispatch(postProductsSuccess(json.data));
            return json;
          })
          .catch(error => dispatch(fetchProductsError(error)));
      };
    }



