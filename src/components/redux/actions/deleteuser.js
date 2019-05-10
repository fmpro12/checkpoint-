import axios from "axios"
import {fetchProductsBegin, fetchProductsError, deleteUserSuccess} from './actioncreators'


export function deleteuser(id) {  
      return dispatch => {
        dispatch(fetchProductsBegin());
        return axios.delete('/api/users/'+id)        
          .then(json => {    
            dispatch(deleteUserSuccess(json.data));
            console.log(json)
            return json;   
          })
          .catch(error => dispatch(fetchProductsError(error)));
      };
    }



