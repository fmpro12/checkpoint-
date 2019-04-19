import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import {ReducerUsers} from './reducers/usersreducer'
import thunkMiddleware from 'redux-thunk'


const reducer = combineReducers({
  form: reduxFormReducer, 
  users: ReducerUsers
});
const store = createStore(reducer, 
    compose (
        applyMiddleware(            
        thunkMiddleware,
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),  
    )
)

export default store;
