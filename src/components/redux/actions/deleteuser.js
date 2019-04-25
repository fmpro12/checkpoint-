import axios from "axios"
import {fetchProductsBegin, fetchProductsError, deleteUserSuccess} from './actioncreators'


export function deleteuser(id) {  
      return dispatch => {
        dispatch(fetchProductsBegin());
        return axios.delete('http://127.0.0.1:3010/api/users/'+id)        
          .then(json => {    
            dispatch(deleteUserSuccess(json.data));
            console.log(json)
            return json;   
          })
          .catch(error => dispatch(fetchProductsError(error)));
      };
    }



