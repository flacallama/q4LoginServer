import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import signUp from './signUp'
import login from './login'
import getFriends from './getFriends';
import getEvents from './getEvents';
import getEvent from './getEvent';
import findEventByCreatorId from './findEventByCreatorId';
import query from './query';
import eventCreation from './eventCreation';
// import setCurId from './setCurId';


const rootReducer = combineReducers({
  // form: formReducer,

  signUp,
  login,
  getFriends,
  getEvents,
  getEvent,
  findEventByCreatorId,
  query,
  eventCreation


})

export default rootReducer;
