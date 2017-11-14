import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import  example  from './example'
import signUp from './signUp'
import login from './login'
// import setCurId from './setCurId';


const rootReducer = combineReducers({
  form: formReducer,
  example,
  signUp,
  login


})

export default rootReducer;