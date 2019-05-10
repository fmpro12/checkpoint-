import axios from "axios"
import {fetchProductsBegin, fetchProductsError, postProductsSuccess} from './actioncreators'


export function postsubmit(values) {  
      return dispatch => {
        dispatch(fetchProductsBegin());
        return axios.post('/api/users', {values})        
          .then(json => {    
            dispatch(postProductsSuccess(json.data));
            return json;
          })
          .catch(error => dispatch(fetchProductsError(error)));
      };
    }



