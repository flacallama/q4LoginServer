let initialState = {
  events: null,
  event: null,
  eventsByUser: null
}

export default (state = initialState, action) => {
  switch (action.type){
    case "GET_EVENTS_PENDING":
      return state;
    case "GET_EVENTS_FULFILLED":
    console.log('getEvents reducer', action.payload.data);
      return {...state, events: action.payload.data}
    case "GET_EVENT_PENDING":
      return state;
    case "GET_EVENT_FULFILLED":
    console.log('reducer: getEvent fulfilled', action.payload.data);
      return {...state, event: action.payload.data}
    case "PUT_EVENT_PENDING":
        return state;
    case "PUT_EVENT_FULFILLED":
    console.log("reducer: getEvents - PUT");
        return {...state, event: action.payload.data}

    case "PUT_EVENT_RSVP_PENDING":
        return state;
    case "PUT_EVENT_RSVP_FULFILLED":
    console.log("reducer: getEventsRSVP - PUT", action.payload.data);
        return {...state, event: action.payload.data}


    case "CREATE_EVENT_PENDING":
      return state;
    case "CREATE_EVENT_FULFILLED":
    console.log('reducer create event', action.payload.data);
      return {...state, event: action.payload.data}

    case "PUT_EVENT_STATUS_INVITED_PENDING":
        return state;
    case "PUT_EVENT_STATUS_INVITED_FULFILLED":
    console.log("reducer: putEventStatusInvited - PUT", action.payload.data);
        return {...state, event: action.payload.data}

    case "FIND_EVENT_BY_CREATOR_ID_PENDING":
      return state;
    case "FIND_EVENT_BY_CREATOR_ID_FULFILLED":
    console.log("reducer: findEventByCreatorId", action.payload.data);
      return {...state, eventsByUser: action.payload.data}


    default:
      return state;
  }
}
