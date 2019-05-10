import axios from "axios"
import {fetchProductsBegin, fetchProductsError, changeStatusSuccess} from './actioncreators'


export function changestatus(id, status) {  
    console.log(status)
      return dispatch => {
        dispatch(fetchProductsBegin());
        return axios.put('api/users/'+id, status)       
          .then(json => {    
            dispatch(changeStatusSuccess(json.data, status));
            console.log(json)
            return {json: json,
                status:status
            }   
          })
          .catch(error => dispatch(fetchProductsError(error)));
      };
    }



