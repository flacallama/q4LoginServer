import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import  example  from './example'
import signUp from './signUp'
import login from './login'
import getFriends from './getFriends';
import getEvents from './getEvents';
// import setCurId from './setCurId';


const rootReducer = combineReducers({
  // form: formReducer,
  example,
  signUp,
  login,
  getFriends,
  getEvents


})

export default rootReducer;
