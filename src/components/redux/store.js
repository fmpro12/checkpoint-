import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import {ReducerUsers} from './reducers/usersreducer'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggermiddleware = createLogger ()

const reducer = combineReducers({
  form: reduxFormReducer, 
  users: ReducerUsers 
});

const store = createStore(reducer, 
    compose (
        applyMiddleware(            
        thunkMiddleware,
        loggermiddleware
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),  
    )
)

export default store;
