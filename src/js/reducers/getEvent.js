let initialState = {
  events: null,
  event: null
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
    default:
      return state;
  }
}
